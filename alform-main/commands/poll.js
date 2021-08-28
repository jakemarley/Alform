const Discord = require('discord.js');

const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "poll",
    async run(client, message, args){
        const pollChannel = message.mentions.channels.first();
        const pollDes = args.slice(1).join(' ');
        if(!message.member.hasPermission('MANAGE_MESSAGES')){
            const embed2 = new Discord.MessageEmbed()
                .setColor('#B10500')
                .setTitle('Insufficient Permission')
                .setDescription('You must have the permission of MANAGE_MESSAGES')
                return message.channel.send(embed2);
        }
        if(!pollChannel){
            if(message.member.hasPermission('MANAGE_MESSAGES')){
                const nochannelembed = new Discord.MessageEmbed()
                .setColor('#B10500')
                .setTitle('Missing Field')
                .setDescription('You must add a channel')
                return message.channel.send(nochannelembed);
            }
        }
        if(!pollDes){
            const nodescembed = new Discord.MessageEmbed()
            .setColor('#B10500')
            .setTitle('Missing Field')
            .setDescription('You must add a reason')
            return message.channel.send(nodescembed);
        }
        const embed = new Discord.MessageEmbed()
            .setColor('#06B800')
            .setTitle('New poll')
            .setDescription(pollDes)
            if(message.member.hasPermission('MANAGE_MESSAGES')){
                let msgEmbed = await pollChannel.send(embed); 
            await msgEmbed.react('👍')
            await msgEmbed.react('👎')
            }
    }
}


