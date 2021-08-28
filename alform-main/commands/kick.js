const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    async run (client, message, args) {
        // if the user does not have the KICK_MEMBERS permission, return an error
        if(!message.member.hasPermission("KICK_MEMBERS"))  return message.channel.send('You don\'t have perms')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) {
            const embed4 = new MessageEmbed()
                .setTimestamp()
                .setAuthor(`${message.author.username}`)
                .setDescription('Please specify a user to kick')
                .addField('Correct Usage:', `*Kick <Username Or Id> <Reason> `)
                .addField('Example Usage:', `*Kick <@jake> <shit posting> `)
                .setColor('#3498DB')
                .setTitle('❌ | Failed Action: specify a user')
                
            message.reply(embed4)
            return
        }

        if(!member) {
            const embed = new MessageEmbed()
                .setDescription('Can\'t seem to find this user. Sorry \'bout that :/')
                .setColor('#3498DB')
                .setTitle('❌ Failed Action: Kick')
                .setAuthor(`${message.author.username}`)
                .setTimestamp()
            message.channel.send(embed)
            return
        }
        if(!member.kickable){
            const embed2 = new MessageEmbed()
                .setDescription('This user can\'t be kicked.')
                .setColor('#3498DB')
                .setTitle('❌ Failed Action: Kick')
                .addFields(
                    {
                        name: 'It is either because they are a mod/admin, or their highest role is higher than mine',
                        value: "You might want to try giving me a role higher than the target's."
                    }
                )
                .setAuthor(`${message.author.username}`)
                .setTimestamp()
            message.reply(embed2)
            return
        }

        if(member.id === message.author.id) {
            const embed3 = new MessageEmbed()
                .setDescription('Sorry, You are trying to kic\'k your self!')
                .setAuthor(`${message.author.username}`)
                .setTitle('❌ Failed Action: Kick')
                .setColor('#3498DB')
                .setTimestamp()
            message.reply(embed3)
            return
        }

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Member Kicked')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Kicked', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setColor('#3498DB')
        .setTimestamp()

        message.channel.send(kickembed);


    }
}