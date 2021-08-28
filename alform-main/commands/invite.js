const {MessageEmbed} = require('discord.js')
const discord = require('discord.js')

module.exports={
    name:"invite",

    run:async(Client,message,args) => {
        
        const embed = new MessageEmbed()
        .setDescription("[Click here](https://discord.com/api/oauth2/authorize?client_id=848254224339828768&permissions=483354806&scope=bot) to invite the bot?")
        return message.channel.send(embed);
    }    
}
