const fs = require("fs");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
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


 function setAutoRole(id, value){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  Database1.AutoRole[id] = typeof Database1.AutoRole[id] == "number" ? Database1.AutoRole[id] = value : value;
  let data = JSON.stringify(Database1);
  return fs.writeFileSync('db1.json', data);
}

module.exports = {
  name: 'autorole',
  description: 'set autorole.',

   async run (client,message,args) {
  if(!message.member.hasPermission('MANAGE_ROLES')){
   const embed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('Insufficient Permission')
   .setDescription('You much have the permission of MANAGE_ROLES')
   return message.channel.send(embed);
  }

if(args[0] == "off") {
updateData();
 setAutoRole(message.guild.id, 0)
 updateData();
 message.channel.send("Autorole is now off.")
updateData();
   return;
}

     updateData();
  let role = args.slice(0).join(" ");

 const givenRole = message.mentions.roles.first() || message.guild.roles.cache.find(rolee => rolee.name.toLowerCase().startsWith(role)) || message.guild.roles.cache.find(rolee => rolee.id == role)

  if(!givenRole && args[0] !== "off") return message.reply("please mention a role/write role id! or write *autorole off");

   updateData();
   setAutoRole(message.guild.id, givenRole.id)
   updateData();
      const embed = new Discord.MessageEmbed()
     .setDescription(`new autorole is now ` + `${givenRole.name}` + "!")
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
 