const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Comandos de Firewall Games:")
  .addField("Mis Comandos:\n" +
                                  "!!creador \n" +
                                  "**Te enseño quien es mi creador** \n" +
                                  "!!avances \n" +
                                  "**Aqui salen mis actualizaciones (No disponible)** \n" , true)
  .addField("!!fundadores\n" +
                                  "**Te enseño quienes son los CEO de Firewall Games**\n" +
                                  "!!estadofivem \n" +
                                  "**Te enseño el Trello de como va el servidor**\n" +
                                  "Otros Bots\n" +
                                  "!!help \n", true)
  .setColor("#FFB600")
  message.channel.send({embed})

}
