const discord = require ( 'discord.js');
const {MessageEmbed} = require('discord.js')

module.exports = {
  name: "comingsoon",



  async run(client,message,args) {

    const embed = new MessageEmbed()
    .setTitle('**Alform comingsoon Features**')
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
    .setColor('BLUE')
    .setDescription("`createrole` | `deleterole` |  `xp-levaling` | `connect4`")
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp()
    message.channel.send(embed);
  }  

  
}
