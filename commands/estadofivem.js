const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("FiveM:")
  .setColor("#00ECFF")
  .setDescription(`https://trello.com/b/k8pq0H4F/roleplayworld-roadmap**`)
  .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)

  message.channel.send({embed})
  .then(msg => {
    msg.react('🔋')
  })
  .catch(() => console.error('Emoji failed to react.'));

}
