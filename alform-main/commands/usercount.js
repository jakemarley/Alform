const { Client} = require("discord.js");
const Discord = require('discord.js');
const {MessageEmbed} = ('discord.js');

module.exports = {
  name: "usercount",
  description: " how many server is  the bot in",

  run: async(client,message,agrs) => {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${client.users.cache.size} users`)
    return message.channel.send(embed);
  }
}
