const { Discord, MessageEmbed } = require("discord.js")

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
    name: "checkwarn",
    run: async (client,message,args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return;
     updateData();
    const user = message.mentions.members.first()
    
     if(!user) return message.channel.send("please mention a member.")
      message.channel.send(`${user.user.username} currently has ${UserWarns[message.guild.id + user.user.id] == undefined ? "0" : UserWarns[message.guild.id + user.user.id]} warning(s)`)
      updateData();
    }

}

updateData();