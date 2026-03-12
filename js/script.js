let cart = [];

function addToCart(name, price){

let product = {
name: name,
price: price
};

cart.push(product);

alert(name + " added to cart");

localStorage.setItem("cart", JSON.stringify(cart));

}