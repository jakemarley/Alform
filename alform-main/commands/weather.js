const {MessageEmbed} = require('discord.js'); 
const weather = require ('weather-js');
const client = require ('discord.js')
const Discord = require('discord.js');


module.exports ={
 name: "weather",
    description:"get the weather",

    async run(client,message, args){
      weather.find({search: args.join(" "), degreeType: 'C F'}, function(error, result) {
        if(error) return message.channel.send(error);
        if(!args[0]) message.channel.send('Please specify a location');

        if  (result === undefined || result.length ===0) return message.channel.send('**Invalid** location');
       
       var current = result[0].current;
       var location = result[0].location;
       

       const weatherinfo = new Discord.MessageEmbed()
       .setDescription(`**${current.skytext}**`) 
       .setAuthor(`weather forecast for ${current.observationpoint}`)
       .setThumbnail(current.imageUrl)
       .setColor('RED')
       .addField('Timezone',`${location.timezone}`,  true)
       .addField('Degree Type',`${location.degreetype}`,   true)
       .addField('Temperature',`${current.temperature}°`, true)
       .addField('Wind',current.winddisplay, true)
       .addField('feels like',`${current.feelslike}°`, true)
       .addField('Humifity',`${current.humidity}%`, true)
       
       message.channel.send(weatherinfo) 
     })   
    }


}    
