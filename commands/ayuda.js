const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Comandos de Firewall Games:")
  .setColor("#FFB600")
  .addField("Mis Comandos:\n" +
                                  "**!!creador**\n" +
                                  "*Te enseña quien es mi creador*\n" +
                                  "__**2.**__ !!avances \n" +
                                  "__**3.**__ !!fundadores\n" +
                                  "__**4.**__ !!estadofivem \n" +
                                  "Otros Comandos\n" +
                                  "__**5.**__ !!help\n", true)

  message.channel.send({embed})

}
