let username= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
let password= /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/


function login(){
    
let usernameInput = document.getElementById("username").value;
let passwordInput = document.getElementById("password").value;


    if(!username.test(usernameInput)){
        alert("invalid username")
    }
    else if(!password.test(passwordInput)){
        alert("invalid password")
    }
    else{
        alert("login successfull")
    }

}
function darkmode(){
    document.body.style.backgroundColor="black"

    localStorage.setItem("theme","dark")
}

let savedtheme=localStorage.getItem("theme")
if(savedtheme==="dark"){
    document.body.style.backgroundColor="black"
    

}
function lightmode(){
    document.body.style.backgroundColor="white"

    localStorage.setItem("theme","light")
}

let savedtheme1=localStorage.getItem("theme")
if(savedtheme1==="light"){
    document.body.style.backgroundColor="white"
    
}