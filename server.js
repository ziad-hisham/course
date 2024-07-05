const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;
const logEvents =require('./middlewear/logEvents')
const cors = require('cors')
const helmet = require('helmet')


//custom middle wear 





app.use((req,res,next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`,'reqlog.txt')
    console.log(`${req.method } ${req.path}`)

    next()
})
//cross origin resoures sharing 

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://your.domain.com");
    next();
});


app.use (cors())

app.use(express.static(path.join(__dirname,'/public')))
app.use("/subdir",express.static(path.join(__dirname,'public')))
app.use('/subdir',require('./routes/subdir'))
app.use('/',require('./routes/root'))

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));