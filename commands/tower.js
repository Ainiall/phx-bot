const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tower')
		.setDescription('News channel alert about one new tower being placed'),
	async execute(interaction) {
		if (!interaction.member.roles.cache.has(process.env.R4)) return; //only r4
		
		const towerEmbed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('ALLIANCE TOWER')
		.setDescription('An alliance tower has just been placed')
		.setThumbnail('https://cdn.discordapp.com/attachments/665697953423294524/889965981106073671/unknown.png')
		.setTimestamp()
		.setFooter('PHX R4 STAFF');
		
		await interaction.reply({ content: '@everyone', embeds: [towerEmbed]});
		
	},
};
