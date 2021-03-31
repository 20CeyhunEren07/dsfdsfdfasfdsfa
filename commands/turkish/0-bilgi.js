const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

module.exports = {
  name: "bilgi",
  aliases: ["emoji-bilgi"], // hiçbir takma ad yoksa: []
  run: async (client, message, args) => {

if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Bilgi Komutu', "Sunucudaki bir emoji hakkında bilgi alabilirsiniz.")
.addField('Kullanım', `-bilgi emojiadi
-bilgi :emoji:`)
.addField('Örnekler', `-bilgi ${client.emojis.cache.get(client.emojis.cache.random().id)}
-bilgi superemoji`)
.addField('Kısaltmalar', `-bılgı
-bilgı
-bılgi`)
.setFooter(message.author.username+' tarafından istendi.', message.author.avatarURL({ dynamic: true })));

  const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
  var emoji;
  if(s) {
  if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send('Bilgisini vermem için **bu sunucuda** olan bir emojiyi göndermeli veya adını yazmalısınız. Örnek; `-bilgi emoji`')
  emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
  } else {
  if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send('Bilgisini vermem için **bu sunucuda** olan bir emojiyi göndermeli veya adını yazmalısınız. Örnek; `-bilgi emoji`')
  emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
  };

  const author = await emoji.fetchAuthor();
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('#eb5c0e')
  .setTitle(`Emoji Bilgi`)
  .addField("Emoji ID", emoji.id)
  .addField('Hareketli mi?', emoji.animated ? 'Evet' : 'Hayır')
  .addField('Eklenme Tarihi', moment(emoji.createdAt).format('DD') + ' ' + moment(emoji.createdAt).format('MM').toString()
  .replace('01', 'Ocak')
  .replace('02', 'Şubat')
  .replace('03', 'Mart')
  .replace('04', 'Nisan')
  .replace('05', 'Mayıs')
  .replace('06', 'Haziran')
  .replace('07', 'Temmuz')
  .replace('08', 'Ağustos')
  .replace('09', 'Eylül')
  .replace('10', 'Ekim')
  .replace('11', 'Kasım')
  .replace('12', 'Aralık') + ' ' + moment(emoji.createdAt).format('YYYY'))
  .addField('Kullanım', `\`<${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>\``)
  .addField('Ekleyen Kişi', '<@!'+author.id+'>')
  .addField('Bağlantı', '[Buraya tıkla]('+emoji.url+')')
  .setThumbnail(emoji.url)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({ dynamic: true })));



}}