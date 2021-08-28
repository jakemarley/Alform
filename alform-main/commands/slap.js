const Discord = require('discord.js');
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
module.exports = {
 name: "slap",
 description: "slap member",
 
  run: (client, message) => {
      
    const rando_imgs = [
        "https://media1.tenor.com/images/bf52b05fde72f946aa22ad36a44d3fa4/tenor.gif",
        "https://media1.tenor.com/images/2b3a3e107ac57d4f170a8f8e414fec9f/tenor.gif",
        "https://media1.tenor.com/images/a9b8bd2060d76ec286ec8b4c61ec1f5a/tenor.gif",
      ]

 const member = message.mentions.members.first()
      if(!member) return message.reply("Choose a victim to give a slap!")
      const embed = new MessageEmbed()
        .setTitle(`${message.author.username} slapped ${member.user.username}`)  
        .setImage(`${rando_imgs[Math.floor(Math.random() * rando_imgs.length)]}`)
        .setColor('PURPLE')
       message.channel.send(embed)
       
  },

}
