// Discord.js bot
const Discord = require('discord.js');
const Cleverbot = require("cleverbot-node");

const client = new Discord.Client();

const clbot = new Cleverbot;

 const activities_list = [
  
"with Superdila",
"with Swigglywigglyniggy",
"with Syera Nightcore",
"with Sρυυкιι Pεтяσℓ シ",
"with TagIt🌺",
"with Taiga Aisaka",
"with Yuri Slave",
"with k_i_m_o_c_h_i_i-",
"with karma",
"with kev",
"with killerx",
"with kirishima best boy",
"with kirito",
"with kyoko ♪",
"with ýæğəř",
"with Žinių Barakuda",
"with кαfυυ ¢нιиσ",
"with кεωℓsωeet",
"with м¢HEaveNTAI",
"with ֆɦǟɢքɨʟɛ",
"with ღGradNC",
"with ᏟᏜɲᗬY Eriii",
"with ℂ𝕙𝕒𝕣𝕚𝕤𝕞𝕒𝕥𝕚𝕔𝕋𝕖𝕔𝕙",
"with ℤᎽℰXᎾℕ",
"with ∂ισ🌹",
"with ◐𝙊𝙣𝙚𝙉𝙞𝙜𝙝𝙩◑",
"with ◭ KiriBaku gives me life ◮",
"with ☬Lizard_  ☬",
"with ☯Kairony☯",
"with ☯natasja☯",
"with ✘ℏᾰтḙ Պʏ ℓ!ḟḙ✘",
"with ✞Illusion✞",
"with ❁ (´｡• ᵕ •｡`) ♡❁",
"with Ⲟⲩⲃⲁⲥⲧⲉ",
"with うまる",
"with アロン Spooky Version",
"with ベビーガール",
"with ワタシ",
"with 정하는 Pacchi",
"with 🅱OI CHAN",
"with 🌌 Perry 🌌",
"with 🎃MustangDeathness🎃",
"with 🎃Spoop Pumpkin🎃",
"with 😎AncientLegend😎",
"with 🥀BabyJada🥀"
   
 
 ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {

    setInterval(() => {

        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).

        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.

    }, 15000); // Runs this every 10 seconds.

});

client.on("message", (message) => {
  if(message.content === "hug") {
    message.channel.send("*hugs you*");
  }
});
 
client.login(process.env.TOKEN);








