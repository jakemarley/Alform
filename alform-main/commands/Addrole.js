const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "role",
    description: "add a role to a member.",
    
    run: async (bot, message, args) => {
        
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply(new MessageEmbed()
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                .setTitle('❌ Failed: Missing User Permissions')
                .setDescription(`You need the "Manage Roles" permission to do this.`)
                .setColor('RED')
                .setFooter('Error thrown at:')
                .setTimestamp())
           
            
            
        
        
        
      const user = message.mentions.users.first();
        
        if(user){

         const member = message.guild.member(user.id)
         
         if(member){
             
             const role = message.mentions.roles.first();
             
             if(role){
         
               const role2 = member.roles.cache.get(role.id)
                  if(!role2){ 
                      member.roles.add(role).then(() => {
                    message.channel.send(`added ${role} to ${member.displayName} by ${message.author.tag}`)
                    })
                  } else {
                  message.channel.send(`${member.displayName} already have ${role}`) 
                  }
                 

             } else {
          message.channel.send("provide role!")
       }


        } else {
          message.channel.send("can't find member!")
       }

        } else {
          message.channel.send("provide member!")
       }



    }
}
