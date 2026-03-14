
/* STAT COUNTER ANIMATION */

function counter(id,target){

let element = document.getElementById(id)

let count = 0

let interval = setInterval(()=>{

count++

element.innerText = count

if(count >= target) clearInterval(interval)

},30)

}

counter("wins",12)
counter("players",8)
counter("clips",54)
counter("community",1200)
