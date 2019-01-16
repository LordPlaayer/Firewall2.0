const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Estado del Servidor:")
  .setColor("#00E8FF")
  .setDescription(`
**Mis Comandos**
!!creador
!!fundadores
!!estadofivem
!!avances`)
 message.channel.send({embed})
})
}
