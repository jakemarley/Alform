const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "mute",
    description: "Mutes a member from the server",

    async run (client, message, args) {
       if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setTitle("you can't use this! you need `MANAGE_ROLES` permission!").setColor("RED"));

  if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setTitle("i can't use this! i need `MANAGE_ROLES` permission!").setColor("RED"));

  const user = message.mentions.users.first();

  if(user){

   const member = message.guild.member(user.id);

   if(member){

  const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === "muted")
  
  if(role){

  const rolee = member.roles.cache.get(role.id);

  if(rolee){
    message.channel.send(new Discord.MessageEmbed().setTitle("this user already muted!").setColor("RED"))
  } else {
    member.roles.add(role.id)
    message.channel.send(new Discord.MessageEmbed().setTitle("muted " + member.user.tag).setColor("GREEN"))
    message.guild.channels.cache.forEach(channel => {
      channel.updateOverwrite(role, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    })
  }

  } else {
    message.guild.roles.create({
      data: {
        name: "muted",
        color: "#000001",
        position: message.guild.me.roles.highest.position
      }
    }).then(() => {
      message.channel.send(new Discord.MesageEmbed().setTitle("cannot find muted role...").setColor("RED")).then(msg => {
        setTimeout(() => {
        msg.edit(new Discord.MesageEmbed().setTitle("creatig muted role..").setColor("YELLOW"))
        }, 1000)
      }).then(msg => {
        setTimeout(() => {
        msg.edit(new Discord.MesageEmbed().setTitle("created muted role.").setColor("GREEN"))
        }, 1000)
      })
    })
  }

   } else {
     message.channel.send(new Discord.MessageEmbed().setTitle("cannot find member!").setColor("RED"))
   }

  } else {
    message.channel.send(new Discord.MessageEmbed().setTitle("provide member to mute!").setColor("RED"))
  }


    }
}
