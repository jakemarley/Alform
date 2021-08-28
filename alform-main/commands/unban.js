const Discord = require('discord.js');

const {MessageEmbed } = require('discord.js')

module.exports = {
    name: "unban",
    description: "Unbans a member from the server",

    async run(client, message, args) {
        
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.guild.members.cache.get(args[0]);

        if (!args[0]) {
            var embed4 = new MessageEmbed()
                .setTimestamp()
                .setAuthor(`${message.author.username}`)
                .setDescription('Please specify an user id')
                .setColor('#C7124B')
                .setTitle('❌ Failed Action: Unban')
            message.reply(embed4)
            return
        }

        try {
            const memberId = message.content.substring(message.content.indexOf(' ') + 1)

            const bannedMember = message.guild.members.unban(memberId)
            if (bannedMember) {
                const Banembed = new Discord.MessageEmbed()
                    .setTitle('Member Unbanned')
                    .setDescription(`${memberId}`)
                    .addField('Unbanned by', `${message.author.username}`)
                    .setFooter('Time Unbanned')
                    .setColor('GREEN')
                    .setTimestamp()
                message.channel.send(Banembed);
            } else {
                message.channel.send('Could not find the banned user, you should check if the user was banned.')
            }
        } catch (err) {
            console.log(err)

        }
    }
}
