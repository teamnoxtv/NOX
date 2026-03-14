
function loadClips(){

let clips = JSON.parse(localStorage.getItem("noxClips")) || []

let gallery = document.getElementById("clipGallery")

gallery.innerHTML=""

clips.forEach((clip,i)=>{

let card = document.createElement("div")

card.className="panel"

card.innerHTML = `

<h3>${clip.title}</h3>

<p>${clip.player}</p>

<video width="250" controls>
<source src="${clip.url}">
</video>

`

gallery.appendChild(card)

})

}

loadClips()
