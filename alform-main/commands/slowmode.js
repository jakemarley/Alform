const  Discord  =require ('discord.js');
const {prefix} = require ('../../config.json');
const { MessageEmbed } = require('discord.js');


module.exports = {
name : "slowmode",
description: "slowmode on a channel ",


run:async (client, message) => {
      if (!message.member.permissions.has(("MANAGE_CHANNELS"))) {
            const noPerm = new MessageEmbed()
                .setTitle(`${message.author.username}`, message.guild.iconURL({dynamic: true}))
                .setDescription('❌ Failed: You do not have permissions to do this!')
                .setTimestamp()
            message.reply(noPerm)
            return 
           }
    
        if(!message.guild.me.hasPermission(("MANAGE_CHANNELS"))) {
                 const noPerm = new MessageEmbed()
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                .setTitle('❌ Failed: I don\'t have permissions to do that')
                .setDescription(`I need the "("MANAGE_CHANNELS"" permission to do this.`)
                .setColor('RED')
                .setFooter('Error thrown at:')
                .setTimestamp()
                message.reply(noPerm)
            return
        }
const args = message.content.slice(prefix.length).trim().split(/ +/)
const second = args[1]
if(!second) return message.channel.send("provide number!")
if(isNaN(second)) return message.channel.send("provide true number!")
 if(second > 21600) return message.channel.send("number can't be more than 21600(6 hours) second!")
 message.channel.setRateLimitPerUser(second)
 message.channel.send(`Slowmode is now: ${second}s`)
}
}
