const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Firewall Games:")
  .setColor("#00ECFF")
  .setDescription(`Los creadores de Fireware son : **LordPlaayer#1337, RicoReight#8888 y TǁGℝΞŞ810😼#0149**`)
  .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)

  message.channel.send({embed})
  .then(msg => {
    msg.react('🔥😍')
  })
  .catch(() => console.error('Emoji failed to react.'));

}
