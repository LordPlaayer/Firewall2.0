const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Comandos de Firewall Games:")
  .setColor("#FFB600")
  .addField("Mis Comandos:\n" +
                                  "!!creador \n" +
                                  "*Te enseño quien es mi creador* \n\n" +
                                  "!!avances \n" +
                                  "*Aqui salen mis actualizaciones (No disponible)* \n\n" +
                                  "!!fundadores\n" +
                                  "*Te enseño quienes son los CEO de Firewall Games* \n\n" +
                                  "!!estadofivem \n" +
                                  "*Te enseño el Trello de como va el servidor* \n\n" +
                                  "Otros Bots\n" +
                                  "!!help \n\n", true)

  message.channel.send({embed})

}
