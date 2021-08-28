const {client, message,MessageEmbed} = require ('discord.js')

module.exports= {
   name: 'partner',

   run: async(client,message,args) => {
    const embed = new MessageEmbed()
     .setAuthor('Alform partner')
     .setDescription('Here is a list of commulity that Alform has partner with')
     .addFields(
        { name: "Luigis support",
         value: "[Click here](https://discord.gg/f5EZpVHeYf) to join their server?"
        }, 
         {name :"Infinity botlits",
           value:"[Click here](https://infinitybotlist.com/discord) to join their server?"
         },
     )
       message.channel.send(embed)
    }
}
