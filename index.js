// Discord.js bot
const Discord = require('discord.js');
const Cleverbot = require("cleverbot-node");

const client = new Discord.Client();

const clbot = new Cleverbot;

 activities = require('./activities.json');
  // creates an arraylist containing phrases you want your bot to switch through.
const game = ('activities.activities_list')
client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity activities[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 20000); // Runs this every 10 seconds.
});

client.on("message", (message) => {
  if(message.content === "hug") {
    message.channel.send("*hugs you*");
  }
});
client.on("message", message => {
  if (message.channel.type === "dm") {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
});
 
client.login(process.env.TOKEN);








