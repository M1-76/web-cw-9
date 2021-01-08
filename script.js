let products = [
    {name: "Brulee", price:1.000},
    {name: "Dates", price:1.000},
    {name: "Oreo", price:0.750},
];




let cart = [];

let total = 0;

function addToCart(index) {

    let product = products [index];

   total = total + product.price
   total += product.price

    cart.push(product);

    console.log(cart)
   
    let list = document.getElementById(`list`);

    list.innerHTML += `<li>${product.name} ${product.name}</li>`;

    document.getElementById("total").innerHTML = `${total} KD`;
   

   
}
