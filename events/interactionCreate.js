module.exports = {
	name: 'interactionCreate',
	execute(client, interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} used: ${interaction.commandName}.`);
	
		// Interactions with the bot, only respond if it's a valid command
	
		if (!interaction.isCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			command.execute(interaction, client);
		} catch (error) {
			console.error(error);
			interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	
},
};