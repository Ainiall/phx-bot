const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('utc')
		.setDescription('See current UTC time'),
	async execute(interaction) {
		await interaction.reply(
            { content: `UTC: ${ new Date().getUTCHours()}:${new Date().getUTCMinutes()}h`, 
            ephemeral: true }   
        );
	},
};