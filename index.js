const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'], restTimeOffset: 50, messageCacheMaxSize: 50 });
const { Database } = require("hype.db")
const db = new Database("emoji")
const moment = require('moment');

//--- HANDLER BAŞLANGIÇ ---\\

const { CommandHandler } = require("hype.handler") 
const { EventHandler } = require("hype.handler") 
const { Client } = require("hype.handler")
const hc = new Client();

const bot = new CommandHandler(client, hc)
bot.setCommandFolder("./commands")
bot.setPrefix("?")
bot.setPrefix2("-")
bot.setPrefix3("/")
bot.setPrefix4("+")
bot.setPrefix5(".")
bot.loader()

const event = new EventHandler(client, hc)
event.setEventFolder("./events")
event.loader()

//--- HANDLER BİTİŞ ---\\

client.config = require('./structures/config.js');
client.login(client.config.token);

client.on('ready', async () => {

return console.log(`${client.user.tag} ismi ile giriş yaptım.`);
});