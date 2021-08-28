const { Client} = require("discord.js");
const Discord = require('discord.js');
const {MessageEmbed} = ('discord.js');

module.exports = {
  name: "servercount",
  description: " how many server is  the bot in",

  run: async(client,message,agrs) => {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${client.user.username} is in ${client.guilds.cache.size} servers`)
    return message.channel.send(embed);
  }
}
