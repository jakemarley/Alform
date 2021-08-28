const discord = require ('discord.js')
const {MessageEmbed} = require('discord.js')
const { arg } = require('mathjs')

module.exports = {
    name: "vote",

    run:async (client,message,args) => {
        const embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setTitle('Vote for Alform')
        .addFields(
        {name: "Top.gg",
        value: "[Vote here](https://top.gg/bot/848254224339828768/vote)"},
        {name: "Infinitybotlist", 
         value:"[Vote here](https://infinitybotlist.com/bots/848254224339828768/vote)"},
         {name:"Botlist",
         value:"[Vote here](https://botlist.me/bots/848254224339828768/Vot)"},
         {name:"DisBot",
          value: "[Vote here](https://disbot.net/bot/848254224339828768/vote)"},
        {name:"RBD",
         value: "[Vote here](https://radarbotdirectory.xyz/bot/848254224339828768/vote)"
        },
        {name:"VoidBots",
         value: "[Vote here](https://voidbots.net/bot/848254224339828768/vote)"    
        },
      
      
      )
       .setFooter ('Thank you for the vote')
        message.channel.send(embed)

        
    } 
}  
  