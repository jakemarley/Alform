const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "rate",
    description: "Rate something.",

     run: async (client, message, args) => {
    
      const rate = args.slice(0).join(" ");
    if(!rate) return message.channel.send("**what do you want to rate?**");
        function rnum(baseSize) {
	return Math.floor(Math.random() * baseSize || 10);
}
    const num = rnum(10)
 message.channel.send(new Discord.MessageEmbed().setTitle("I Rated").setDescription("I Rated " + `${num}/10 to ` + rate).setFooter("requested by " + message.author.tag).setTimestamp().setColor("RANDOM"))
      
    }
}
