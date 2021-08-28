const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "unlock",
    description: "Put channel into lockdown mode.",
    usage: "<channel id> +slow Xs",
    run: async (bot, message,) => {
        if(message.member.hasPermission('MANAGE_CHANNELS')) {
            const embed = new MessageEmbed()
                .setTitle(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                .setDescription('This channel has been unlocked.')
                .setColor('RED')
            message.channel.send(embed)
            message.guild.roles.cache.forEach(s => {
  message.channel.updateOverwrite(s, s.name.toLowerCase().startsWith("muted") ? console.log(".") : {SEND_MESSAGES: true, ADD_REACTIONS: true
  })
});
        } else return message.channel.send('You can\'t use that!')
    }
}

