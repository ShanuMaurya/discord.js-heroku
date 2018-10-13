// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Sρυυкιι Pεтяσℓ シ', {type: 'WATCHING'});
});

client.on("message", (message) => {
  if(message.content === "hug") {
    message.channel.send("*hugs you*");
  }
});

client.login(process.env.TOKEN);
