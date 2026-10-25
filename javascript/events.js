let usernameinput=document.getElementById("name")
let result=document.getElementById("result")
usernameinput.addEventListener('input',function(){
    result.textContent=usernameinput.value
})

let nameinput=document.getElementById("name")

usernameinput.addEventListener('change',function(){
    console.log(usernameinput.value)
})

let userlogin=document.getElementById("login")

userlogin.addEventListener("submit",function(){
    console.log("form submitted")

})