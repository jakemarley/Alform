const Discord = require('discord.js');

const { MessageEmbed } = require('discord.js');
module.exports = {
 name: "8ball",
 description: "ask qustion ",
 run: (client, message, args) => {
 if (!args[2]) return message.reply("Please ask a full qustion...");
 let resplies = ["Yes."," No.", "I don't know.", "Ask again later."];


 let result = Math.floor((Math.random()* resplies.length));
 let question = args.slice(0).join(" ");

 let embed= new Discord.MessageEmbed()
 .setAuthor(message.author.username, message.author.displayAvatarURL())
 .setColor("#aa0000")
 .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/pool-8-ball_1f3b1.png` )
 .addField(question,  resplies[result]);
  message.channel.send(embed);
 }
}
