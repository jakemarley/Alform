const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "purge",
    description: "Purge a messages",

    async run (client, message, args) {

        const amount = args.join(" ");
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            const noPerm = new MessageEmbed()
                .setTitle(`${message.author.username}`, message.guild.iconURL({dynamic: true}))
                .setDescription('You do not have permissions to do this!')
                .setTimestamp()
            message.reply(noPerm)
            return
        }
    
        if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
                 const noPerm = new MessageEmbed()
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                .setTitle('❌ Failed: I don\'t have permissions to do that')
                .setDescription(`I need the "MANAGE_MESSAGES" permission to do this.`)
                .setColor('RED')
                .setFooter('Error thrown at:')
                .setTimestamp()
                message.reply(noPerm)
            return
        }
        
        if(!amount) {
            const embedNo = new MessageEmbed()
                .setTitle(`${message.author.username}`, message.guild.iconURL({dynamic: true}))
                .setDescription('You need to specify an amount of messages to purge!')
                .setTimestamp()
            message.reply(embedNo)
            return
        }
        if(amount > 100) {
            const embedTooMuch = new MessageEmbed()
                .setTitle(`${message.author.username}`, message.guild.iconURL({dynamic: true}))
                .setDescription('You can\'t delete more than 100 messages at once.')
                .setTimestamp()
            message.reply(embedTooMuch)
            return 
        }
        

        if(amount < 1) {
            const embedMinusOne = new MessageEmbed()
                .setTitle(`${message.author.username}`, message.guild.iconURL({dynamic: true}))
                .setDescription('You need to delete at least one message!')
                .setTimestamp()
            message.reply(embedMinusOne)
            return
        }

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
        )});


        const embedSuccess = new MessageEmbed()
        .setTitle(`PurgeSuccess`)
        .setDescription(`Purge ${amount} messages!`)
         .setTimestamp()
            message.channel.send(embedSuccess).then(msg => {
            msg.delete() 
        })


    }
}  
