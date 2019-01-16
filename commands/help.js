const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setColor("#00ECFF")
  .setDescription
(`
**Mis Comandos**
!!creador
!!fundadores
!!estadofivem
!!avances
`)
}
