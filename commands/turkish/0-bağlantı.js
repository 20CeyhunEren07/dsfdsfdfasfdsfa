const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

module.exports = {
  name: "bağlantı",
  aliases: ["link"], // hiçbir takma ad yoksa: []
  run: async (client, message, args) => {

if(!args[0]) return;
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
var emoji;
if(s) {
if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send('Bilgisini vermem için **bu sunucuda** olan bir emojiyi göndermeli veya adını yazmalısınız. Örnek; `-bilgi emoji`')
emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
} else {
if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send('Bilgisini vermem için **bu sunucuda** olan bir emojiyi göndermeli veya adını yazmalısınız. Örnek; `-bilgi emoji`')
emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
};

return message.channel.send(`Gönderdiğiniz hareketli emojinin bağlantısı: `+emoji.url);


}}