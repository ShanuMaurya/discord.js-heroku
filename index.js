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
"with A Q T  .",
"with A Z T H E T I X",
"with ACE",
"with APH romano is a mood",
"with AX_D̸͌R̴A̷K̷͗E̴ ツ",
"with Abdellah",
"with Adolf Hitler",
"with AdorableEgoist",
"with Aivariox",
"with Alanas",
"with Alanas.bak",
"with Alex ",
"with Alex_The_Geat",
"with AlmiN_",
"with Alta!r",
"with Ambleparadox",
"with Andy Bernard",
"with AngelDdestroyer",
"with AnimeLover LIFEEEEEE",
"with Animestar ",
"with Anitoli",
"with Annalyn Canna",
"with Anon",
"with Ariake",
"with Arrowhead ThE Imperial Jap",
"with Aruima",
"with Ashie Phooie",
"with AsianDude",
"with Avallex",
"with Azziy",
"with B A T",
"with BLΛ _iK♢V",
"with BOWSETTE",
"with BadVibesForever",
"with Bailasan",
"with Bambozelens",
"with Bear",
"with Bepis",
"with Beta",
"with Black☆Star",
"with BobbyEskobar",
"with BoobBot™",
"with Bread",
"with Brigade-Pyon",
"with BuGzBuNnY",
"with CHIMPANZEE PUSSY",
"with CHY E",
"with CannibalCactus",
"with Chak Mak BTS Man",
"with Charlemagne",
"with Chase Marvell",
"with Chloe",
"with Coca Cola Trà Đá",
"with Comet ♪",
"with ConfusedPanda",
"with Consumer",
"with Coockie ( w )",
"with Corner",
"with CrazyGaming",
"with CryBaby",
"with Cryoz",
"with Cylum_Hero",
"with DISBOARD",
"with DLM",
"with DSLVDR",
"with Daniel Kalkanjiev",
"with Dank Memer",
"with Dark Kun",
"with DarkAngel",
"with DarkNight",
"with Death",
"with Deja Vu",
"with Delict~Chill",
"with Depression is key to success",
"with Despair",
"with Deus_Vult_ INFIDELS",
"with DieEineFotze",
"with Discord Server List",
"with Discord Servers",
"with DiscordServers",
"with Djenty_boi",
"with Dontsmileatme",
"with Doomsquid",
"with Dr Nick",
"with Dry The Rain",
"with Duff",
"with Dwight Schrute",
"with Elixibrus",
"with Elizabeth",
"with Elmar - FGminy",
"with Em",
"with Enju",
"with EpicGirl",
"with EveryoneEqual",
"with Exalda",
"with Excalibur",
"with FallenGodJericho",
"with Fatal Error",
"with Faze(depressed)",
"with FreshPapaDean",
"with Frostic",
"with FuunKami",
"with GIZO",
"with Gabbu",
"with Gamin'Reaper",
"with Gooligen",
"with Green_The_Ushanka",
"with Groovy",
"with Handsoap",
"with Hanna Victoria Neptune",
"with Happy life",
"with Harokku",
"with Hayabusa//MythicFX",
"with Heart",
"with Heidu",
"with Helina",
"with Hero",
"with Hope",
"with Hudson",
"with Hugs",
"with I am Crazy",
"with I eat shoes",
"with IG My Name Is Andy Now",
"with InterestingBoi",
"with Isla",
"with ItsJadenPlays",
"with ItsRose",
"with JB StanTrash",
"with JT",
"with Jae",
"with JcsUniverse",
"with Jes",
"with Jim Halpert",
"with Jim",
"with Jimjams",
"with Julieシ",
"with J🎃hnFairfax",
"with K bread",
"with KK Kawahara",
"with KaityBugxx",
"with Kanade NC",
"with Kanna",
"with Kanzaki",
"with KapDang",
"with Karma🔥| ❄Yukimura",
"with Kasumi 💠| 🕊Piko",
"with Ken",
"with Ken kent",
"with Kevin Malone",
"with Kira the weird",
"with Kiri-kun",
"with Kirito",
"with Kohei",
"with Kori🍧",
"with Kotoroki",
"with myself (Kurumi)",
"with Lapusyonok",
"with LardFAHQuadrooplets",
"with Lean 🖤",
"with Leonidas",
"with Life is Strange",
"with Lil Pump",
"with Lila",
"with Livid",
"with LookingUp",
"with Loser",
"with LuLu",
"with Lucifer",
"with Lucifer",
"with Luminous Cat",
"with Lyin Fox",
"with MASTERED ULTRA INSTINCT   RYCON",
"with Major",
"with Mal(Mallory)",
"with Mantaro",
"with Mari",
"with Marky",
"with Marshal",
"with Master_Wizard",
"with Maybe we'll meet again.",
"with Medol Luta",
"with Melo",
"with Metta",
"with MiRa",
"with Miamomoh",
"with Michael Scott",
"with MidgetMouse",
"with MiniMark",
"with Mintea DuMa",
"with MissForgetFull",
"with Moretingz",
"with MrWolfer",
"with Mtndewice",
"with My fiX",
"with Mυcнιεヾ",
"with N i y o n ニヨン",
"with NEKUŚ",
"with NIGHTMARE",
"with Nabeee",
"with Nagatotoro [God Of WaR]",
"with Naughty Vamp",
"with Negative | Tigro",
"with Neko",
"with S E N S I T I V E",
"with SPOOKY CANCEROUS THOT SLAYER",
"with SaintSamu",
"with Sam.",
"with SavageJakePauler",
"with Seamen man of the sea",
"with Senpai-Chan",
"with Servant Rem (^-^)",
"with Sesshōmaru (hobisun)",
"with Itz me Shanu",
"with Shelby",
"with Shota Aizawa",
"with Silent",
"with Skeleboi",
"with Skuli",
"with SlenderCaster",
"with SmokeySilentAk",
"with Smug Genos",
"with SnakesEverywhere",
"with Sniff",
"with So Cool",
"with SoldieMAN",
"with Somet",
"with SpOOPy BoYE",
"with Spike",
"with Spitrex",
"with Spooky Doggy🎃",
"with SpookySkeleton",
"with SpookySpider",
"with Spoopy Sombra",
"with Stanley Hudson",
"with Statbot",
"with Stips Chilan",
"with SuperAngel",
"with Superdila"
"with Swigglywigglyniggy",
"with Syera Nightcore",
"with Sρυυкιι Pεтяσℓ シ",
"with TagIt🌺",
"with Taiga Aisaka",
"with TastyTiger",
"with Tatsumaki",
"with Tenshi",
"with Thatonechick",
"with The Bot",
"with TheRaatikka",
"with TheSuperHappyChicken",
"with Thugger",
"with Toby Flenderson",
"with Topiczz",
"with Topio",
"with Tung~",
"with Turtlez",
"with WillX",
"with Wotan",
"with Xa.cee",
"with Xenovia",
"with XxMelissaMelanieXx",
"with Yoshi",
"with Yoshinuchi",
"with Your Hentai Waifu",
"with Yuri Slave",
"with Z  z z",
"with Z N!TH",
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
"with kyoko ♪",,
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
"with ֆɦǟɢքɨʟɛ" 
"with ღGradNC",
"with ᏟᏜɲᗬY Eriii",
"with ℂ𝕙𝕒𝕣𝕚𝕤𝕞𝕒𝕥𝕚𝕔𝕋𝕖𝕔𝕙",
"with ℤᎽℰXᎾℕ",
"with ∂ισ🌹",
"with ◐𝙊𝙣𝙚𝙉𝙞𝙜𝙝𝙩◑",
"with ◭ KiriBaku gives me life ◮",
"with ☬Lizard_  ☬",
"with ☯Kairony☯"
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
"with 😎AncientLegend   😎",
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








