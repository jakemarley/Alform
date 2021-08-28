const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'lock',
	description: 'Put channel into lockdown mode.',
	usage: '<channel id> +slow Xs',
	run: async (bot, message) => {
		if (message.guild.me.hasPermission('MANAGE_CHANNELS')) {
			if (message.member.hasPermission('MANAGE_CHANNELS')) {
				const embed = new MessageEmbed()
					.setTitle(
						`${message.author.username}`,
						message.author.displayAvatarURL({ dynamic: true })
					)
					.setDescription('This channel is locked for everyone.')
					.addFields({
						name: 'Only mods/admins can unlock this channel.',
						valu: 'Ane of them to unlock it.'
					})
					.setColor('RED');

				message.channel.send(embed);

			message.guild.roles.cache.forEach(s => {
  message.channel.updateOverwrite(s, {SEND_MESSAGES: false, ADD_REACTIONS: false
  })
});
			} else {
				return message.channel.send("You can't use that!");
			}
		} else {
			return message.channel.send(
				"give me 'MANAGE_CHANNELS' permissions to do that! "
			);
		}
	}
};
