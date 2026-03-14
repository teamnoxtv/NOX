const serverID = "1473100963962421389";

async function getDiscordMembers(){

try{

const response = await fetch(`https://discord.com/api/guilds/${serverID}/widget.json`);

const data = await response.json();

const memberCount = data.members.length;

document.getElementById("discord-count").innerText = memberCount;

}

catch(error){

console.log("Discord widget error", error);

}

}

getDiscordMembers();
