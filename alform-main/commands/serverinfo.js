const Discord = require('discord.js');

module.exports = {
  name: "serverinfo",
  description: "info about the server",
  

  run: async (bot, message, args) => {
    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache;
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('**Server Info**')
    .setThumbnail(message.guild.iconURL({ dynamic: true}))
    .addField('General', [
    `**Name:** ${message.guild.name}`,
    `**ID:** ${message.guild.id}`,
    `**Owner:** ${message.guild.owner}`,
     `**Region:** ${message.guild.region}`,
    `**BoostTier:**:${message.guild.premiumTier || "None"}`,
    `**Created:** ${message.guild.createdAt.toLocaleString()}`,
    ])
    .addField('Statistics', [,
    `**RolesCount:** ${roles.length}`,
    `**Emoji Count:** ${emojis.size}`,
    `**Member Count:** ${message.guild.memberCount}`, 
    `**Bots:** ${members.filter(member => member.user.bot).size}`,
    `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
    `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
    `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
    ])
    .setTimestamp()
    message.channel.send(embed)
  }
}
