
const { MessageEmbed } = require('discord.js');


let region = {
  "eu-central": ":flag_eu: Central Europe",
  "singapore": ":flag_sg: Singapore",
  "us-central": ":flag_us: U.S. Central",
  "sydney": ":flag_au: Sydney",
  "us-east": ":flag_us: U.S. East",
  "us-south": ":flag_us: U.S. South",
  "us-west": ":flag_us: U.S. West",
  "eu-west": ":flag_eu: Western Europe",
  "vip-us-east": ":flag_us: VIP U.S. East",
  "london": ":flag_gb: London",
  "amsterdam": ":flag_nl: Amsterdam",
  "hongkong": ":flag_hk: Hong Kong",
  "russia": ":flag_ru: Russia",
  "southafrica": ":flag_za:  South Africa"
}

module.exports = {
name: 'userinfo',
description: 'Display information about a user',



  async run (client, message, args) {
    const {guild, channel } = message
  
    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)
  
   const embed = new  MessageEmbed()
   .setColor("BLUE") 
   .setTimestamp()
   .setFooter("Alform")
   .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
    .addFields(
      {
        name: 'User tag',
        value: user.tag,
      },
      {
        name: 'Status',
        value: user.presence.status,
      },
       {
       name: 'Region',
       value: message.guild.region,
      },

      {
       name:'Nickname',
       value: member.nickname || 'None',  
      },
      
      
      {
        name: 'Roles',
        value: member.roles.cache.map(r => `${r}`).toString()
      },
      
      {
       name: 'Joined server',
       value:  new Date (member.joinedTimestamp).toLocaleDateString(),
      },
      
      {
       name:' Joined Discord',
       value: new Date(user.createdTimestamp).toLocaleDateString(),
      }
      
    )
    channel.send(embed)
    
  }

}
