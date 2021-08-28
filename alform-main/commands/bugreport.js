const discord = require ('discord.js');
const {MessageEmbed} = require ('discord.js');
module.exports = {
    name: "bugreport",
    run: async (client, message,args) => { 
        const channel = await client.channels.fetch("848275889175265390")
        if(!args[0]) return message.channel.send("you need to enter a bug")
        let messageArgs = args.join(" "); 
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setAuthor('New Bug Report By ' + message.member.user.tag + "!", "https://cdn.discordapp.com/attachments/837308948183777320/870030832339910696/Alform.png")
        .setDescription(messageArgs)
        .setFooter(`Alfrom Support Servers`)
        channel.send(embed);
        message.channel.send("your bug " + `\`${messageArgs}\`` + " has been sent!")
   
}  
}