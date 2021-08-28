const Discord = require('discord.js');

const { MessageEmbed } = require('discord.js');
module.exports = {
 name: "say",
 description: "say something ",
 run: (client, message, args) => {
  
   let say;

say = args.slice(0).join(" ");
   
   if(!say) return message.channel.send("provide something to say!");

if (message.content.includes("@here") || message.content.includes("@everyone")) return message.channel.send("I can't ping everyone!")
   
   return message.channel.send(say)
   
 }
}
