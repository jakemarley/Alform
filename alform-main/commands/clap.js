const Discord = require('discord.js');

const { MessageEmbed } = require('discord.js');
module.exports = {
 name: "clap",
 description: "say something with clap emoji ",
 run: (client, message, args) => {
  
   const say = args.slice(0).join(" ");
   
   if(!say) return message.channel.send("provide something to say with :clap: emoji!");
   
   return message.channel.send(say.split("").join("👏"))
   
 }
}
