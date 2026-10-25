// //even or odd 

// let n=Number(prompt("enter a number:"));
// function evenorodd(){
// if(n%2==0){
//     document.getElementById("it is a even number")
// }
// else(
//     document.getElementById("odd number")
// )
// }
// evenorodd();
// //positive or negative

// let a=Number(prompt("enter a number1:"))
// let b=Number(prompt("enter a number2:"))
// let c=Number(prompt("enter a number3:"))

// function largest(){
//     if(a>b && a>c){
//         document.getElementById("largest").innerText = '${a}'
//     }
//     else if(b>c && b>a){
//         document.getElementById("largest ").innerText='${b}'
//     }
//     else(
//         document.getElementById("largest ").innerText='${c}'
//     )
// }
// largest();

// //reversing the number or word 
// let original=promt("enter a word:")
// function reverse(){
//     let reversedword=0;


// }


// let rows=Number(prompt("rows:"))
// let output=""
// function stars(){
//     for(let i=1;i<=rows;i++){
//         for(let j=1;j<=i;j++){
//             output=output+"*";
//         }
//         output=output+"<br>";
//     }
// }
// stars();
// document.getElementById("stars").innerHTML=`output`;

//for numbers
// let rows=Number(prompt("rows:"))
// let output="";
// function numbers(){
//     for(let i=1;i<=rows;i++){
//         for(let j=1;j<=i;j++){
//             output=output+j;
//         }
//         output=output+"<br>";
//     }
// }
// numbers();
// document.getElementById("numbers").innerHTML=output;



//for numbers in repeated times

// let rows=Number(prompt("rows:"))
// let output=""
// function numbers(){
//     for(let i=1;i<=rows;i++){
//         for(let j=1;j<=i;j++){
//             output=output+i;
//         }         output=output+"<br>";
//     }
// }
// numbers();
// document.getElementById("numbers1").innerHTML=output;


//for numbers in reverse
// let rows=Number(prompt("rows:"))
// let output=""
// function reversenumbers(){
//     for(let i=rows;i>=1;i--){
//         for(let j=1;j<=i;j++){
//             output=output+i;
//         }         output=output+"<br>";
//     }
// }
// reversenumbers();
// document.getElementById("reversenumbers").innerHTML=output;

//digital timer 

// function digitaltimer(){
// let date=new Date()
// let time=date.toLocaleTimeString()
//     document.getElementById("clock").innerHTML=time;
// }
// setInterval(digitaltimer,1000);
// digitaltimer();

//age calculator

// let dob=(prompt("enter your dob:yyyy/mm/dd"))
// let birthDate=new Date(dob)
// let presentDate=new Date()

// let age=presentDate.getFullYear()-birthDate.getFullYear();
// if(presentDate.getMonth()<birthDate.getMonth() || presentDate.getMonth()===birthDate.getMonth() && presentDate.getDate()<birthDate.getDate() ){
//     age--;
// }
// document.getElementById("age").innerHTML=age;

//delivery time
// let product=prompt("enter your product:")
// let deliverydays=Math.trunc(Math.random()*10)+1

// document.getElementById("delivery").innerHTML=product+"will be delivered in"+deliverydays+"days";

//flash sales

// let endDate=new Date()
// endDate.setDate(endDate.getDate()+3)

// function countdown(){
//     let presentDate=new Date().getTime()
//     let distance=endDate.getTime()-presentDate

//     if(distance==0){
//         clearInterval(timer)
//         document.getElementById("countdown").innerHTML="sale ended"
//     }

//     let days=Math.floor(distance/(1000*60*60*24));
//     let hours=Math.floor(distance/(1000*60*60)%24);
//     let minutes=Math.floor(distance/(1000*60)%60);
//     let seconds=Math.floor(distance/(1000)%60)


// document.getElementById("countdown").innerHTML=`${days}d:${hours}h:${minutes}m:${seconds}s`
// }
// let timer=setInterval(countdown,1000)
// countdown()


//mind test game
let guessingnumber=0
let score=0
function guessnumber(){
    guessingnumber=Math.trunc(Math.random()*90000)+10000;
    document.getElementById("number").innerHTML=guessingnumber;
    setTimeout(function(){
        document.getElementById("number").innerHTML=""
    },1000)
}
function checkingnumber(){
    let num=Number(document.getElementById("num").value)

    if(guessingnumber===num){
        score+=10;
        document.getElementById("score").innerHTML=`score=${score}`
        guessnumber();
    }
    else{
        document.getElementById("else").innerHTML="Game ended thank you"
    }
    
}





