const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "unmute",
    description: "Unmutes a member from the server",

    async run (client, message, args) {
        // if the user does not have the Unmute_MEMBERS permission, return an error
        if(!message.member.hasPermission("MANAGE_ROLES"))  return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const roles = message.guild.roles.cache.find(r => r.name === "Muted")

        member.roles.remove(roles)
        const embed = new MessageEmbed()
            .setTitle(`✅ Sucess!: ${member.user.username} was Unmuted!`)
            .setColor('RED')
            .setDescription("Please, Dont break the rules again..")
            .setFooter(`${message.author.username} Unmuted ${member.user.username}`)
        message.reply(embed)

        const chn = message.guild.channels.cache.find(c => c.name === "mod-logs")
        if(!chn) return
        else {
            const embed = new MessageEmbed()
                .setTitle(`Mod-log!: ${member.user.username} was Unmuted!`)
                .setColor('RED')
                .setFooter(`${message.author.username} Unmuted ${member.user.username}`)
            chn.send(embed)
        }



    }
}