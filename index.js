// Discord.js bot
const Discord = require('discord.js');
const Cleverbot = require("cleverbot-node");

const client = new Discord.Client();

const clbot = new Cleverbot;

 const activities_list = [
"with 490+ Members",
"with •.¸♡ ᴅᴀᴅᴅʏ ♡¸.•",
"with -SaKun-",
"with -ˏˋ𝒥𝓊𝓃𝒾𝓅𝑒𝓇𝓇ˎˊ-",
"with .🐊.",
"with Superdila",
"with Swigglywigglyniggy",
"with Syera Nightcore",
"with Sρυυкιι Pεтяσℓ シ",
"with TagIt🌺",
"with Taiga Aisaka",
"with Yuri Slave",
"with ZERØ",
"with Zenaku",
"with fuyu",
"with fweh",
"with georgie 💓💕💞💗💝💘",
"with geronimo",
"with givemefood",
"with goddytrapo",
"with gone from discord",
"with grandaddyFatty",
"with hallowissa",
"with hanoka mamoka",
"with hdpcshow",
"with hibiscusX",
"with hitisme",
"with iamnotcreative",
"with idksum",
"with iiEclipze",
"with iiZemzie",
"with ilovearilpiterpen",
"with isa",
"with jolie",
"with just.mystic",
"with k_i_m_o_c_h_i_i-",
"with karma",
"with kev",
"with killerx",
"with kirishima best boy",
"with kirito",
"with kyoko ♪",
"with spookyjollybutts;D",
"with strangerdanger",
"with sumfuckhead",
"with theOGperson",
"with thepirateking",
"with theterriblegamer",
"with tokyoturtle",
"with trololo",
"with waesabii",
"with whoomperscoomper",
"with xInfinity",
"with yaneko",
"with yaxin",
"with yayaboomerang",
"with wigb you too good",
"with yumi",
"with zoltar",
"with ×o×",
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








