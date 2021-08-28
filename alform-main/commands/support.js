
const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
require('discord-buttons')(client);
const { MessageEmbed } = require('discord.js');

module.exports = {
 name:"support",
 description: "here is the help you need",
    run:async(client, message, args) => {
        const disbut = require("discord-buttons");
      let embed = new MessageEmbed()

     .setDescription('Join our support server by click below?')
     let button = new disbut.MessageButton()
     .setStyle('url')
     .setURL('https://discord.gg/naz2QNxcgb') 
     .setLabel('Join'); 
     message.channel.send(embed, button)
}   }  
