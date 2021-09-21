const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { r4 } = require('../config.json');
const { news } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('portal')
		.setDescription('Message with portal UTC time and count of participants with reaction badges')
		.addStringOption(option => option.setName('description').setDescription('March info').setRequired(true))
		.addStringOption(option => option.setName('date').setDescription('Date (yyyy/mm/dd)').setRequired(true))
		.addStringOption(option => option.setName('time').setDescription('UTC time 24h format (hh:mm)').setRequired(true)),
	async execute(interaction, client) {
		if (!interaction.member.roles.cache.has(r4)) return; //only r4

		await interaction.reply('@everyone Portal event schedualed! Check <#'+news+'> to see more info about it');
		
		const description = await interaction.options.getString('description');
		const date = await interaction.options.getString('date');
		const dateNumber = date.replaceAll('/','');
		const time = await interaction.options.getString('time');
		const timeNumber = time.replace(':','');
		const accepted = {};
		const declined = {};

		const calendar = 'https://calendar.google.com/calendar/u/0/r/eventedit?dates='+dateNumber
			+'T'+time+'00Z/'+dateNumber+'T'+timeNumber+'00Z&text=PORTAL-KoA&ctz=UTC&sf=true';
		const utcToEst = 'https://dateful.com/convert/utc-coordinated-universal-time?t='+timeNumber
			+'&tz2=EDT-EST-Eastern-Time';

		const portalEmbed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('PORTAL CHALLENGE')
		.setDescription(description)
		.setThumbnail('https://www.gamesguideinfo.com/images/king_of_avalon_alliance_portal.jpg')
		.addFields(
			{ name: 'Please react to the badge to indicate your participation',
			 	value: '[🗓️'+date+']('+calendar+')'+ '\t'+ '[⏰'+time+'UTC]('+utcToEst+')' },
			{ name: '\u200B', value: '\u200B' },
			{ name: '✅ I WILL GO', value: 'Click the ✅ badge at the end of the message if you are going to do portal', inline: true },
			{ name: `❌ I WON'T GO`, value: 'Click the ❌ badge at the end of the message if you are not going to do portal', inline: true },
		)
		.setTimestamp()
		.setFooter('PHX R4 STAFF');
		
		const msg = await client.channels.cache.get(news).send({ embeds: [portalEmbed] });
		msg.react('✅').then(() => msg.react('❌'));
		
	},
};
