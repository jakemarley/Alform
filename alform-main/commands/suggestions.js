const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");


module.exports={
   name: 'suggestions',
   description:' create a suggestion',
  
  
   run: async (client, message, args) => {
   const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
   if (!channel) return message.channel.send('please create channel named `suggestions`!');
  
   let messageArgs = args.slice(0).join(" "); 
      if(!messageArgs) return message.channel.send("provide something to do suggestion")
   const embed = new MessageEmbed()
   .setColor('BLUE')
   .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
   .setDescription(messageArgs)
   .setFooter('evalzero suggestions')
  
  
   channel.send(embed).then((msg) =>{
      msg.react('👍');
      msg.react('👎');
      message.delete();
   }).catch((err)=>{
      throw err;
   });
  
   }
  
  }
