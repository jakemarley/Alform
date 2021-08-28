const db = require ('quick.db');

module.exports = {
    name : 'setprefix',
    destription: 'set prefix for yor servers',

    run: (client, message, args)=> {
        if (!message.member.permissions.has(("MANAGE_GUILD"))) return message.channel.send(':x: You do not have permissions to do this!')
        if(!message.guild.me.hasPermission(("MANAGE_GUILD")))  return message.channel.send(':x: I don\'t have permissions to do that!')
        if(!args[0]) return  message.channel.send("You need to provide a prefix");

        db.set(`prefix_${message.guild.id}`,args[0])

        message.channel.send(`The prefix for this server is now ${args[0]}`)
    }
}
