const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "help",
    description: "here is the help you need",
    run:(client, message, args) => {
         const db = require('quick.db');
        const serverPrefix = db.get(`prefix_${message.guild.id}`)
        let embed = new MessageEmbed()
        .setTitle("**Help**")
       .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .addFields(
            {name:'bot Prefix',
             value: serverPrefix || "*" },
            { name: "**Information**",
            value: "`serverinfo` | `botinfo` | `userinfo` | `servercount` | `usercount`| `weather`| `support`| `comingsoon` | `vote` | `partner`"},
            {name: "**Moderation**", 
            value:"`ban` | `unban` | `kick` | `purge` | `mute` | `unmute` | `addrole` | `removerole` | `lock` | `unlock` | `slowmode` | `poll` | `warn` | `checkwarn` | `removewarn` | `tempmute` | `welcomechannel` | `autorole`"},
            {name: "**Fun**",
           value: "`meme` | `8ball` | `coinflip` | `avatar` | `say` | `joy` | `clap` | `rate` | `slap`| `hug` | `joke`"},
            {name: "**Utility**",
             value:"`setnick` | `suggestions` | `setprefix` | `feedback` | `Toggle` | `bugreport`"},
            {name: "LINK",
            value: "[Invite Me](https://discord.com/api/oauth2/authorize?client_id=848254224339828768&permissions=483354806&scope=bot) | [Support Sever](https://discord.gg/cBq98h3vM7)|[Vote](https://top.gg/bot/848254224339828768/vote)"
            }
        )   
        .setColor("RANDOM")
        .setFooter('Alform')
        message.channel.send(embed)
}   }
