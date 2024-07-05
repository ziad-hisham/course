const express = require('express');
const router =express.Router()
const path = require ('path')


router.get('^/$|/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, "..",'views', 'index2.html'));
});



router.get('/i', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, "..",'views', 'index.html'));
});

router.get('/thankyou(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, "..",'views', 'thankyou.html'));
});

router.get('/contact(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, "..",'views', 'contact.html'));
});





router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, "..",'views', 'new-page.html'));
});

router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); //302 by default
});

router.post('/',(req,res)=>{
    res.json({requestBody: req.body})
    console.log(JSON.stringify({requestBody:req.body}))
})


module.exports =router
