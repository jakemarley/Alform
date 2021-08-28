
const  {MessageEmbed}  = require ('discord.js')
const client = require ("discord.js")


const fs = require("fs")
let jsonDB = fs.readFileSync('db1.json');
let Database1 = JSON.parse(jsonDB);
let UserWarns = Database1.UserWarns;

function updateData(){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  UserWarns = Database1.UserWarns;
  return Database1;
}

function addWarning(id, size){
  jsonDB = fs.readFileSync('db1.json');
  Database1 = JSON.parse(jsonDB);
  Database1.UserWarns[id] = typeof Database1.UserWarns[id] == "number" ? Database1.UserWarns[id] + size : size;
  let data = JSON.stringify(Database1);
  return fs.writeFileSync('db1.json', data);
}


module.exports = {
  name: 'warn',
  description: 'warn a member',
  
   async run (client,message,args) {
  if(!message.member.hasPermission('MANAGE_MESSAGES')){
   const embed = new MessageEmbed()
   .setColor('RED')
   .setTitle('Insufficient Permission')
   .setDescription('You much have the permission of MANAGE_MESSAGES')
   return message.channel.send(embed);
  }
     updateData();
  let member = message.mentions.members.first()
  if(!member) return message.reply("Ping a valid user!");
 
  let reason;
     
     reason = args.slice(1).join(" ")
 
   if(!reason) reason = "Unspecified"
   updateData();
   addWarning(message.guild.id + member.user.id, 1)
   updateData();
      const embed = new MessageEmbed()
     .setDescription(`${message.mentions.members.first()} You have been warned for \`${reason}\``)
     .setColor("RED")
     message.channel.send(embed).then(msg => {
      msg.delete({timeout: 20000})
      updateData();
    });
    updateData();
  
  updateData();
  }
} 
 
