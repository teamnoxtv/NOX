
function uploadClip(){

let title = document.getElementById("title").value
let player = document.getElementById("player").value
let url = document.getElementById("url").value

let clips = JSON.parse(localStorage.getItem("noxClips")) || []

clips.push({title,player,url})

localStorage.setItem("noxClips",JSON.stringify(clips))

alert("Clip Uploaded")

}
