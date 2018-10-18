// Discord.js bot
const Discord = require('discord.js');

const client = new Discord.Client();

const activities_list = [
    "with the console",
    "with FL Studio",
    "with my friends here",
    "Use ku!help for playing songs",
    "with Frosty",
    "with Sρυυкιι Pεтяσℓ シ"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

client.on("message", (message) => {
  if(message.content === "hug") {
    message.channel.send("*hugs you*");
  }
});
 
client.login(process.env.TOKEN);








