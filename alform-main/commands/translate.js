const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {

name: "translate",
description: "translate something",

  run: async(client, message, args) => {
   
    const translate = require('google-translate');

    var language = args[0]

     var text = args.slice(1).join(" ")

    if(!language) return message.channel.send('**which language do you want to use?**')

    if(language.length !== 2) return message.channel.send('**Max length 2 `English => en`**')

    if(!text) return message.channel.send('**what do you want to translate**')

    var smth = translate(text, {to: language}).then(res => {  
       return message.channel.send(new Discord.MessageEmbed().setTitle('').setDescription(`Your text\n\`\`\`${text}\`\`\` \n\n Translate to ${language}\n\`\`\`${res.text}\`\`\``).setFooter(`requested by ${message.author.tag}`).setTimestamp().setThumbnail('https://www.innovaajans.com/wp-content/uploads/2016/08/3f61ca0a98bc156e58ef01b236f3ed54.png').setColor('RANDOM'));
    }).catch(err => {
      message.channel.send('**Something went wrong**')
    })
    
 
}

}
