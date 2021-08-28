const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const config = require("config");
const {version} = require("../package.json");
const {author} = require ("../package.json");
module.exports = {
 name: "botinfo",
 description: "Display bot info ", 



 async run (client, message) {
  const db = require('quick.db');
        const serverPrefix = db.get(`prefix_${message.guild.id}`)
  let embed = new MessageEmbed()
   .setFooter(`Requested by ${message.author.username}`)
  .setAuthor(
   `Infomation about ${client.user.username} bot`,
    client.user.displayAvatarURL()
    )
   .addFields(
       {
         name: 'Bot name:',
         value: `<@!848254224339828768>`
       },
        {
         name: "Server's prefix:",
         value: serverPrefix || "*",
        },
        {
        name: "Version:",
        value: version, 
        },
         { name:"Bot-Library:",
         value: "discord.js",
        },
        {
          name: "Users:",
          value: client.users.cache.size
        },
        {
         name: 'Total Servers:',
         value: client.guilds.cache.size
        },

        {
          name: "Created:",
          value: client.user.createdAt.toLocaleString()
        },
        {
          name: 'Developer by:',
          value: `<@!468374294984916992>`
        },

    )
    message.channel.send(embed)
 }
}
