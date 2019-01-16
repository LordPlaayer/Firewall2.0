const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Comandos de Firewall Games:")
  .setColor("#FFB600")
  .setDescription(`**Mis Comandos :** `)
  .setDescription(`!!creador `)
  .setDescription(`!!avances `)
  .setDescription(`!!fundadores  `)
  .setDescription(`!!estadofivem `)
  .setDescription(`**Otros Comandos :** `)
  .setDescription(`!help `)

  message.channel.send({embed})
  .then(msg => {
    msg.react('💖')
  })
  .catch(() => console.error('Emoji failed to react.'));

}
