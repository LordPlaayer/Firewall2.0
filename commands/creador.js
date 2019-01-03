const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Dato:")
  .setColor("#5599ff")
  .setDescription(`Mi creador es **LordPlaayer#6030**`)
  .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)

  message.channel.send({embed})
  .then(msg => {
    msg.react('👍')
  })
  .catch(() => console.error('Emoji failed to react.'));

}
