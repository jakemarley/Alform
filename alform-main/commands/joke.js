const giveMeAJoke = require('discord-jokes');
const client = require ('discord.js');
module.exports = {
name: "joke",

 run:(client, message)=> {
        giveMeAJoke.getRandomDadJoke (function(joke) {
        message.channel.send(joke);
    }); 
 }
 
}
