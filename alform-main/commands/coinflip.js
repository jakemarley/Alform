const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "coinflip",
  description: "flip a coin",

  run: async (client, message,args) => {
      const choices = ["heads","tails"];
      const choice = choices[Math.floor(Math.random() * choices.length)];
      let embed = new MessageEmbed()
      .setAuthor("Coinflip!",
      client.user.displayAvatarURL())
      .setDescription(`You flipped a **${choice}**!`)
      .setFooter("evalzero")
      message.channel.send(embed)
    }
    

     
}