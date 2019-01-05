const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  message.delete()

  const embed = new Discord.RichEmbed()
  .setTitle("Estado del Servidor:")
  .setColor("#00E8FF")
  .setDescription(`**https://trello.com/b/k8pq0H4F/fivem-rp-firewall-games**`)

  message.channel.send({embed})
  .then(msg => {
    msg.react('🔋')
  })
  .catch(() => console.error('Emoji failed to react.'));

}
