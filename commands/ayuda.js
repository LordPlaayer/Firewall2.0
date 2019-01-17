const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Comandos de Firewall Games:")
  .setColor("#FFB600")
  .setDescription(`**Mis Comandos :** `)
  .addField(`!!creador `, ``)
  .addField(`!!avances `, ``)
  .addField(`!!fundadores  `, ``)
  .addField(`!!estadofivem `, ``)
  .addField(`**Otros Comandos :** `, ``)
  .addField(`!help `, ``)

  message.channel.send({embed})
  .catch(() => console.error('Emoji failed to react.'));

}
