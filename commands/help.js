const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Comandos de Firewall Games:")
  .setColor("#FFB600")
  .setDescription(`**Mis Comandos** !!creador !!fundadores !!estadofivem !help !!avances`)

  message.channel.send({embed})
  })
  .catch(() => console.error('Emoji failed to react.'));

}
