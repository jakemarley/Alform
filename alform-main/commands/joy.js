const Discord = require('discord.js');

const { MessageEmbed } = require('discord.js');
module.exports = {
 name: "joy",
 description: "say something with joy emoji ",
 run: (client, message, args) => {
  
   const say = args.slice(0).join(" ");
   
   if(!say) return message.channel.send("provide something to say with :joy: emoji!");
   
   return message.channel.send(say.split("").join("😂"))
   
 }
}
