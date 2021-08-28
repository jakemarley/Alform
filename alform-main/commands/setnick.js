const Discord = require("discord.js");

module.exports = {
name: "setnick",
description: " set user nickname",

run: (client, message, args) => {

 if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("you don't have permission!")

if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("i don't have permission!")

const user = message.mentions.users.first();

if(user){

const member = message.guild.member(user.id);

if(member){

const nick = args.slice(1).join(" ");

if(nick){

member.setNickname(nick)
 message.channel.send("succsessfully changed nickname to " + nick)

} else {
  message.channel.send("provide something to set " + member.user.username + "'s nickname");
}

} else {
 message.channel.send("cannot find member");
}

} else {
  message.channel.send("mention a user!")
}

}
}
