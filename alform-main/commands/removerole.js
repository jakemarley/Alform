 
module.exports = {
  name: "removerole",
  description:  "remove a role to the members .",
  permission: "MANAGE_ROLES",
  
  run: async(client,message, args) => {
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
                  if(role2){ 
                      member.roles.remove(role).then(() => {
                    message.channel.send(`removed ${role} of ${member.displayName} by ${message.author.tag}`)
                    })
                  } else {
                  message.channel.send(`${member.displayName} don't have ${role} role!`) 
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
