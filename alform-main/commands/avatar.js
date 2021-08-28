const { MessageEmbed,} = require('discord.js');
module.exports = {
  name: "avatar",
  description: "Sends your avatar or member's avatar",
 run: async (client, message, args) => {
  const user= message.mentions.users.first() || message.author

  const embed = new MessageEmbed()
  .setTitle(`${user.tag}'s Avatar`)  
  .setImage(user.displayAvatarURL({ dynamic: true, size: 2048}))

  .setTimestamp();
  message.channel.send(embed);
  
 }
}   
