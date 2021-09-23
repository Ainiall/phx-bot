const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resource')
		.setDescription('Next resource building poll'),
	async execute(interaction,client) {
		if (!interaction.member.roles.cache.has(process.env.R4)) return; //only r4

		await interaction.reply('@everyone Alliance resource poll available! Check <#'+
			process.env.NEWS+'> to vote');
		
		const resourceEmbed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('RESOURCE BUILDING')
		.setDescription(`Please vote which building you'd like to place next`)
		.setThumbnail('https://cdn.discordapp.com/attachments/665697953423294524/889968706053111818/Sin_titulo.png')
		.addFields(
			{ name: '\u200B', value: '\u200B' },
			{ name: '🪵', value: 'Maybe one day someone would want wood' },
			{ name: '🥘', value: 'FOOD', inline: true },
			{ name: '⚔️', value: 'IRON', inline: true },
			{ name: '🥈', value: 'SILVER', inline: true }
		)
		.setTimestamp()
		.setFooter('PHX R4 STAFF');
		
		const msg = await client.channels.cache.get(process.env.NEWS).send({ embeds: [resourceEmbed] });
		msg.react('🥘').then(() => msg.react('🪵')).then(() => msg.react('⚔️')).then(() => msg.react('🥈'));
			
	},
};



