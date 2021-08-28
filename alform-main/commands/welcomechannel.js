const fs = require("fs");
const Discord = require("discord.js");

let jsonDB = fs.readFileSync('db1.json');
let Database1 = JSON.parse(jsonDB);
let UserWarns = Database1.UserWarns;
let Toggle = Database1.Toggle;
let WelcomeChannel = Database1.WelcomeChannel;
function updateData(){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  UserWarns = Database1.UserWarns;
  Toggle = Database1.Toggle;
  WelcomeChannel = Database1.WelcomeChannel;
  return Database1;
}


function addWarning(id, size){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  Database1.UserWarns[id] = typeof Database1.UserWarns[id] == "number" ? Database1.UserWarns[id] + size : size;
  let data = JSON.stringify(Database1);
  return fs.writeFileSync('db1.json', data);
}

 function setWelcomeChannel(id, value){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  Database1.WelcomeChannel[id] = typeof Database1.WelcomeChannel[id] == "number" ? Database1.WelcomeChannel[id] = value : value;
  let data = JSON.stringify(Database1);
  return fs.writeFileSync('db1.json', data);
}

module.exports = {
  name: 'welcomechannel',
  description: 'set welcome channel.',

   async run (client,message,args) {
  if(!message.member.hasPermission('MANAGE_CHANNELS')){
   const embed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('Insufficient Permission')
   .setDescription('You much have the permission of MANAGE_CHANNELS')
   return message.channel.send(embed);
  }

if(args[0] == "off") {
updateData();
 setWelcomeChannel(message.guild.id, 0)
 updateData();
 message.channel.send("welcome channel is now off.")
updateData();
   return;
}

     updateData();
  let channel = message.mentions.channels.first();
  if(!channel && args[0] !== "off") return message.reply("please mention a channel! or write *welcomechannel off");

   updateData();
   setWelcomeChannel(message.guild.id, channel.id)
   updateData();
      const embed = new Discord.MessageEmbed()
     .setDescription(`new welcome channel is now ` + `${channel}` + "!")
     .setColor("RED")
     updateData();
     message.channel.send(embed).then(msg => {
      msg.delete({timeout: 20000})
      updateData();
    });
    updateData();
  
  updateData();
  }
} 

updateData();
 
