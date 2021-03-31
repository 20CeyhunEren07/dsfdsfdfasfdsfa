const moment = require('moment');
const Discord = require('discord.js');
const { Database } = require("hype.db")
const db = new Database("emoji")

var prefix = "."

module.exports = client => {
  
var version = client.config.version

   let log = message => {
     console.log(`${client.user.username} Discord: ${message}`)
  }
  log(`Aktif, Komutlar yüklendi!`);
  log(`${client.user.username} ismi ile giriş yapıldı!`);
   var oyun = [
     
        `🌹 ${client.guilds.cache.size} Sunucu | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Üye | ${client.channels.cache.size} Kanal`,
        `🌹 Yardım için ${prefix}yardım`

    ];
    setInterval(function() {
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random], { type: "WATCHING" });
        }, 1 * 5000);
}