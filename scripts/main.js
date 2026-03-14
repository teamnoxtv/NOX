// LOADER
window.addEventListener("load", function(){

const loader = document.getElementById("loader")

if(loader){
loader.style.opacity = "0"

setTimeout(()=>{
loader.style.display = "none"
},600)
}

})


// CUSTOM CURSOR
const cursor = document.querySelector(".cursor")

if(cursor){

document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"

})

}


// TAB TITLE ANIMATION
const originalTitle = document.title

let flashing = false

document.addEventListener("visibilitychange", () => {

if(document.hidden){

flashing = true

let i = 0

const messages = [
"👀 Come back!",
"🔥 NOX is waiting",
originalTitle
]

const interval = setInterval(()=>{

document.title = messages[i % messages.length]

i++

if(!flashing){
clearInterval(interval)
document.title = originalTitle
}

},1000)

}else{

flashing = false
document.title = originalTitle

}
<script>

/* LOGIN STATUS */

const loginBtn = document.getElementById("loginBtn")

if(localStorage.getItem("noxUser")){

loginBtn.innerText = "Account"

}


/* CART SYSTEM */

let cart = JSON.parse(localStorage.getItem("noxCart")) || []

function updateCart(){

document.getElementById("cartCount").innerText = cart.length

const container = document.getElementById("cartItems")

container.innerHTML=""

cart.forEach(item => {

const div = document.createElement("div")

div.innerText = item

container.appendChild(div)

})

localStorage.setItem("noxCart",JSON.stringify(cart))

}

function addToCart(item){

cart.push(item)

updateCart()

}

function clearCart(){

cart = []

updateCart()

}

function toggleCart(){

document.getElementById("cartPanel").classList.toggle("open")

}

updateCart()

</script>
})

