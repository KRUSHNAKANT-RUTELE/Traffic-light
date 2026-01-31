let myData = document.querySelector('form')
console.log(myData)



myData.addEventListener('submit',(event)=>{
    let myEmail = document.getElementById('email').value
    let myPass = document.getElementById('pass').value
    event.preventDefault()
    console.log(myPass)
    console.log(myEmail)
    
    if(myPass.length < 6){
        alert("Password is to short")
    }else if(myPass.length > 10){
        alert("Password is to big")
    } else {

        // window.location.href="welcome.html"
        window.open ("welcome.html","_blank")
    }
    
})