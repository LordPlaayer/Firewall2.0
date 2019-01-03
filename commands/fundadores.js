const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Dato:")
  .setColor("#5599ff")
  .setDescription(`Los creadores de Fireware son : **LordPlaayer#6030 y RicoReight#8888**`)
  .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)

  message.channel.send({embed})
  .then(msg => {
    msg.react('👍')
  })
  .catch(() => console.error('Emoji failed to react.'));

}
