const client = require('discord.js');
const {MessageEmbed} = require('discord.js');

module.exports = {
 name:"hug",
 description:"hug someone",

 async run (client, message, args) {
        const fetch = require("node-fetch");
        let HUser =
          message.guild.member(message.mentions.users.first()) ||
          message.guild.members.cache.get(args[1]) ||
          message.author;
        const hugembed = new MessageEmbed()
          .setFooter(
            `Requested By: ${message.author.tag}`,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("#6441a5")
          .setDescription(`${message.author} Had Hugged ${HUser}`)
          .setTimestamp();
    
        const { url } = await fetch("https://gamearoo.top/ram-api-img/hug2.gif")
          .then((res) => res.json())
          .catch((err) => {
            message.reply(`http://ram.gamearoo.top/api is not responding!`);
    
            return;
          });
        hugembed.setImage(url);
    
        message.channel.send(hugembed);
    }
};


