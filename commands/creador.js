const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Creador:")
  .setColor("#FFB600")
  .setDescription(`Soy un BOT programado por **LordPlaayer#1337**`)
  .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)

  message.channel.send({embed})
  .then(msg => {
    msg.react('💖')
  })
  .catch(() => console.error('Emoji failed to react.'));

}
