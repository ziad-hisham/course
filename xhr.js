window.addEventListener('DOMContentLoaded',
    ()=>{
        
const button =document.getElementById('submit')
const h=document.getElementById('h')

button.addEventListener('click',()=>{
    const request =new  XMLHttpRequest()
    request.open('GET',"http://localhost:3500/i")
    request.onload=()=>{
        const data =request.response
        console.log(data)
        h.innerHTML=request.responseText
    }
    request.send()
})
    }
)
