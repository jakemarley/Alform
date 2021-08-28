const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
 name: "feedback",
 description:'Give feedback about the bot',
  
  
   run: async (client, message, args) => { 
    const channel = await client.channels.fetch("872115858657378384")
   if(!args[0]) return message.channel.send("You will need to enter a message")
    let messageArgs = args.join(" "); 
   const embed = new MessageEmbed()
   .setColor('BLUE')
   .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
   .setDescription(messageArgs)
   .setFooter(`Alfrom thanks for the feedback`)
   channel.send(embed);
}
}
