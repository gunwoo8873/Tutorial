const { Client, Collection, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const ConfigData  = require('./AdminData/config.json');
const ConfigType = require(`./AdminData/messageconfig.json`)
const Commands = require(`./Commands/Command`)


const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	] 
});

client.Commands = new Collection()

//const foldersPath = path.join(__dirname, 'commands');
//const commandFolders = fs.readdirSync(foldersPath);

client.once(Events.ClientReady, readyClient => {
	console.log(`Get Ready an Discord Bot Login ${readyClient.user.tag}`);
	client.channels.fetch(ConfigData.channelID).then((readyClient) => {
		readyClient.send({embeds: [new EmbedBuilder().setTitle('Discord Bot OnLine')]})
	})
});

client.on(Events.MessageCreate, async (message) => {
	if (message.author.bot) return

	switch (message.content) {
		case Version:
			if (message.content === `Version`) return {'Discord.js : `14.14.1`\n Bot : `0.0.1`'}
			else (!`Version`) {message.replay({embeds: [new EmbedBuilder().setDescription(ConfigType.emvedErrorMessage).setColor()]})}
			break;
	
		default:
			break;
	}


	/*
	if (message.content === 'Version') {
		message.reply({
			// new EmbedBuilder().setTitle(`Value String = 제목`).setDescription('Value String = 내용').setColor(`Blue = Color')
			embeds: [new EmbedBuilder().setTitle('Service Version').setDescription('Discord.js : `14.14.1`\n Bot : `0.0.1`').setColor(ConfigType.emvedColorSucces)]
		})
	}
	else if (!`Version`) {
		message.reply({
            embeds: [new EmbedBuilder().setDescription(ConfigType.emvedErrorMessage).setColor(ConfigType.emvedColorError)]
        })
	}


	if (message.content === 'Command') {
		message.reply({
			// constent = ChatType : 'Value String'
			//content : '????',
			embeds: [new EmbedBuilder().setTitle('Command').setDescription('1.Version\n 2.Edit\n').setColor(`Green`)]
		})
	}
	*/
	/*
	if (message.content.startsWith(client.user)) {
		message.reply({content: 'Test'})
	}
	*/
})

client.login(ConfigData.token);