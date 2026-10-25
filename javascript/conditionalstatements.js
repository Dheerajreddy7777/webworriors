// //task 1
// let empname=prompt("enter name");
// let basicsalary=Number(prompt("enter salary"));
// let experience=Number(prompt("enter yearsof experience"));

// let bonus=0;
// if(experience>=5){
//     bonus=basicsalary*0.20;
// }
// else if(experience>2) {
//     bonus=basicsalary*0.10;

// }else{
//     bonus=basicsalary*0.05;
// }

// let tax=0;
// if(basicsalary>=50000){
//     tax=basicsalary*0.10;
// }
// else if(basicsalary>30000){
//     tax=basicsalary*0.05;
// }
// else{
//     tax=basicsalary*0.02;
// }

// let finalfare=basicsalary+bonus-tax;

// document.getElementById("salary").innerHTML=
// `<h2>salary slip</h2>
// <p>name:${empname}</p>
// <p>salary:${basicsalary}</p>
// <p>experience:${experience}</p>
// <p>bonus:${bonus}</p>
// <p>tax:${tax}</p>
// <p>finalfare:${finalfare}</p>`;


//task 2

// let customername=prompt("enter name:")
// let productprice=Number(prompt("enter the price:"))
// let quantity=Number(prompt("no of quantity:"))
// let coupon=prompt("enter coupon code:")
// let membership=(prompt("do you have membership?:"))

// let total=productprice*quantity

// let discount=0;
// if(coupon==="save10"){
//         discount=total*0.2;

// }
// else if(membership==="yes"){
//     discount=total*0.1;
// }
// else{
//     discount=0;
// }

// let totalamount=total-discount;

// let deliverycharges=0;
// if(totalamount>=1000){
//     deliverycharges=0;
// }
// else{
//     deliverycharges=20;
// }

// let finalbill=totalamount+deliverycharges;

// document.getElementById("salary").innerHTML =`
// <h2>salary slip</h2>
// <p>customername=${customername}</p>
// <p>totalamount=${totalamount}</p>
// <p>discount=${discount}</p>
// <p>deliverycharges=${deliverycharges}</p>
// <p>finalbill=${finalbill}</p>
// `
//task 3

// let name=prompt("enter your name")
// let age=Number(prompt("enter your age"))
// let monthlysalary=Number(prompt("enter your salary"))
// let workexperience=Number(prompt("enter your experience"))
// let exisistingloanstatus=prompt("do you have loan? yes/no")

// let loanstatus=""
// let eligibleamount=0;
//  if(age>=22 && monthlysalary>=20000 && workexperience>=2 && exisistingloanstatus==="no" ){
//     loanstatus="loan is approved"
//     eligibleamount=monthlysalary*10;
//  }
//  else{
//     loanstatus="loan is rejected"
//  }

//  document.getElementById("salary").innerHTML=`
//  <h2>loan approval</h2>
//  <p>name=${name}</p>
//  <p>loanstatus=${loanstatus}</p>
//  <p>eligibleamount=${eligibleamount}</p>

// `

//task 4

// let studentname=prompt("enter your name:")
// let tenthpercentage=Number(prompt("10%:"))
// let twelthpercentage=Number(prompt("12%:"))
// let entranceexammarks=Number(prompt("entrance marks:"))
// let admissionsts=""
// let branchallotment=""
// if(tenthpercentage>=60 && twelthpercentage>=60 && entranceexammarks>=60){
//     admissionsts="seat is eligible"

// if(entranceexammarks>=90){
//     branchallotment="cse"
// }
// else if(entranceexammarks>=80){
//     branchallotment="ise"
// }
// else{
//     branchallotment="ece"
// }
// }

// else{
//     admissionsts="seat is not eligible"
//     branchallotment="no branch alloted"
// }
// document.getElementById("branch").innerHTML=`
// <h2>Branch allotment</h2>
// <p>studentname=${studentname}</p>
// <p>admissionsts=${admissionsts}</p>
// <p>branchallotment=${branchallotment}</p>
// `;

//task 5

// let customername=prompt("enter name:")
// let units=Number(prompt("units consumed:"))

// let electricitycharges=0
// if(units<=100){
//     electricitycharges=units*2;
// }
// else if(units<=200){
//     electricitycharges=units*4;
// }
// else{
//     electricitycharges=units*6;
// }

// let additionalcharges=0
// if(units>=100){
//     additionalcharges=100;
// }
// else{
//     additionalcharges=50;
// }
// let finalbill=0
// finalbill=electricitycharges+additionalcharges;

// document.getElementById("units").innerHTML=`
// <h1>Electricity Bill</h1>
// <p>customername=${customername}</p>
// <p>units=${units}</p>
// <p>additionalcharges=${additionalcharges}</p>
// <p>electricitycharges=${electricitycharges}</p>
// <p>finalbill=${finalbill}</p>
// `


//task 6

// let customername=prompt("enter name:")
// let tickets=Number(prompt("no of tickets:"))
// let ticketprice=150;

// let total=tickets*ticketprice;
// let discount=0;

// if(tickets>5){
//     discount=20;
// }
// else if(tickets>3){
//     discount=5;
// }
// else{

//     discount=0;
// }
// let discountamount=total*discount/100;
// let finalamount=total-discount;

// document.getElementById("tickets").innerHTML=`
// <h1>ticketbill</h1>
// <p>customername=${customername}</p>
// <p>ticketprice=${ticketprice}</p>
// <p>discount=${discount}</p>
// <p>discountamount=${discountamount}</p>
// <p>finalamount=${finalamount}</p>
// `

//task 7


// let customername=prompt("enter name:")
// let foodbill=Number(prompt("bill:"))

// let membership=prompt("are you have membership?yes/no")
// let discount=0
// let gst=0

// if(membership=="yes"){
//     discount=10
//     gst=5
// }
// else{
//     discount=0;
//     gst=5;
// }
// let discountamnt=foodbill*discount/100;
// let amntafter=foodbill-discountamnt
// let gstamnt=amntafter*gst/100
// let finalbill=amntafter+gstamnt
// let complimentaryoffers=""
// if(finalbill>=4000){
//     complimentaryoffers="dryfruit"

// }
// else{
//     complimentaryoffers="no offer";
// }

// document.getElementById("restaurantbill").innerHTML=`
// <h1>restaurant by bill</h1>
// <p>customername=${customername}</p>
// <p>foodbill=${foodbill}</p>
// <p>discount=${discount}</p>
// <p>gst=${gst}</p>
// <p>finalbill=${finalbill}</p>
// <p>complmentaryoffers=${complimentaryoffers}</p>
// `



//task 8 


// let monumber=Number(prompt("enter the mobile number:"))
// let rechargeamount=Number(prompt("enter the recharge amount:"))

// let execlusivebenifits=""
// let gst=5

// if(rechargeamount>=399){
//     execlusivebenifits="you have unlocked the hotstar membership and premium acces...."
// }
// else{
//     execlusivebenifits="no benifits"
// }
// gst=gst/100*rechargeamount
// let finalbill=gst+rechargeamount

// document.getElementById("recharge").innerHTML=`
// <h1>recharge bill</h1>
// <p>mobilenumber=${monumber}</p>
// <p>rechargeamount=${rechargeamount}</p>
// <p>exclusivebenifits=${execlusivebenifits}</p>
// <p>gst=${gst}</p>
// <p>finalbill=${finalbill}</p>
// `



//task 9

// let customername=prompt("enter name:")
// let age=Number(prompt("enter age:"))
// let weight=Number(prompt("enter weight:"))

// let membershipplan=""
// let membershipfee=0

// if(age<=15 && weight<=55){
//     membershipplan="standard"
//     membershipfee=5000
// }
// else if(age<=22 && weight<=70){
//     membershipplan="premium"
//     membershipfee=8000
// }
// else{
//     membershipplan="premiumplus"
//     membershipfee=10000
// }

// document.getElementById("gym").innerHTML=`
// <p>customername=${customername}</p>
// <p>age=${age}</p>
// <p>weight=${weight}</p>
// <p>membershipplan=${membershipplan}</p>
// <p>membershipfee=${membershipfee}</p>
// `


//task 10


