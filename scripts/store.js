/* LOGIN STATUS */

document.addEventListener("DOMContentLoaded", () => {

const loginBtn = document.getElementById("loginBtn")

if(localStorage.getItem("noxUser")){

loginBtn.innerText = "Account"

}

})


/* CART SYSTEM */

let cart = JSON.parse(localStorage.getItem("noxCart")) || []


function updateCart(){

const cartCount = document.getElementById("cartCount")

if(cartCount){
cartCount.innerText = cart.length
}

const container = document.getElementById("cartItems")

if(container){

container.innerHTML = ""

cart.forEach(item => {

const div = document.createElement("div")

div.innerText = item

container.appendChild(div)

})

}

localStorage.setItem("noxCart",JSON.stringify(cart))

}


/* ADD ITEM */

function addToCart(item){

cart.push(item)

updateCart()

}


/* CLEAR CART */

function clearCart(){

cart = []

updateCart()

}


/* TOGGLE CART PANEL */

function toggleCart(){

const panel = document.getElementById("cartPanel")

if(panel){
panel.classList.toggle("open")
}

}


updateCart()
