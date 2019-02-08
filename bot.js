const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543286099733118977")
setInterval(function() {
channel.send(`فلوس`);
}, 30)
})

client.login("NTE0NzM4NTE1OTc2NzgxODI0.Dzzmbw.WMsi3VYkRKon9zqE6DN4nq-THuw");
