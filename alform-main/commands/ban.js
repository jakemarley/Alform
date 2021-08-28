const Discord = require('discord.js');

const { MessageEmbed } = require('discord.js');
module.exports = {
name: "ban",
description: "Bans a member from the server",

    async run (client, message, args) {
        // if the user does not have the Ban_MEMBERS permission, return an error
       if(!message.member.hasPermission('BAN_MEMBERS')){
            const embed = new Discord.MessageEmbed()
            .setColor('#B10500')
            .setTitle('Insufficient Permission')
            .setDescription('You must have the permission of "BAN_MEMBERS"')
            return message.channel.send(embed);  
        }
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply(new MessageEmbed()
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                .setTitle('❌ Failed: I don\'t have permissions to do that')
                .setDescription(`I need the "BAN_MEMBERS" permission to do this.`)
                .setColor('RED')
                .setFooter('Error thrown at:')
                .setTimestamp())


        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) {
         const embed4 = new MessageEmbed()
          .setTimestamp()
          .setAuthor(`${message.author.username}`)
          .setDescription('Please specify a user')
          .setColor('#C7124B')
          .setTitle('❌ Failed Action: Ban')
          message.channel.send(embed4)
            return
        }
                
        if(!member) {
            const embed = new MessageEmbed()
            .setDescription('Can\'t seem to find this user. Sorry \'about that :/')
            .setColor('#c7124b ')
            .setTitle('❌ Failed Action: Ban')
            .setAuthor(`${message.author.username}`)
            .setTimestamp()
            message. message.reply(embed)
            return
        }
        if(!member.bannable) {
            const embed2 = new MessageEmbed()
            .setDescription('This user can\'t be Banned.')
            .setColor('#C7124B')
            .setTitle('❌ Failed Action: Ban')
            .addFields(
            {
            name: 'It is either because they are a mod/admin, or their highest role is higher than mine',
            value: "You might want to try get me a role higher than the target's."
            }
            )
            .setAuthor(`${message.author.username}`)
            .setTimestamp()
            message.message.reply(embed2)  
            return
        } 

        if(member.id === message.author.id) {
        const embed3 = new MessageEmbed()
        .setDescription('Bruh, you can\'t Ban yourself!')
        .setAuthor(`${message.author.username}`)
        .setTitle('❌ Failed Action: Ban')
        .setTimestamp()
        .setColor('#C7124B')
        message.reply(embed3)
        return
        }

        let reason = args.slice(1).join(" ");

        message.guild.members.ban(member)
        .catch(err => {
         if(err) return message.channel.send('Something went wrong') + console.log(err)
            
        })
        const Banembed = new Discord.MessageEmbed()
        .setTitle('_*Member Banned*_')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Banned by', message.author)
        .addField('Reason', `${reason ? reason: "Unspecified"}`)
        .setFooter(`Time Banned:`)
        .setTimestamp()
        .setImage('https://tenor.com/view/you-were-banned-gif-18033821')
        message.channel.send(Banembed);
    }   
}               
