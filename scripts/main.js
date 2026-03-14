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

})
