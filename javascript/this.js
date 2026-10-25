let objects={
    name:"ddr",
    
    greet:function (){
        console.log(`welcome ${this.name}`)

    }}
let object1={
    name:"dd",
    display: function(){
        console.log(`hii im ${this.name}`)

    }
}

objects.greet()
object1.display()

let user={
    name:"manju"

}
function welcome(role,place){
    console.log(`hii im ${this.name} working as ${role} in ${place}`)

}
welcome.call(user,"fdp","bengaluru")


let product1={
    name:"mobile",
    price:15000

}
let product2={
    name:"tv",
    price:50000
}

function products(discount){
    let finalprice=(this.price-(discount/100*this.price))
    document.getElementById("products").innerHTML=`<p>name:${this.name}</p>
        <p> price:${this.price}</p>
        <p>discount:${discount}%</p>
        <p>finalprice:${finalprice}</p>`
}
products.apply(product2,[20]);
let finalproducts=products.bind(product1,20)
finalproducts();
products.call(product1,10);

