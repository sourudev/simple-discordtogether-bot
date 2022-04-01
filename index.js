const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

//prefix

const prefix = "!";


//Command
client.on('messageCreate', async message => {
	if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(`${prefix}youtube`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
				return message.channel.send(`${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}poker`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}chess`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}checker`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'checkers').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}betrayal`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}fishing`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}lettertile`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}wordsnack`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}doodlecrew`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'doodlecrew').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}spellcast`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'spellcast').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}awkword`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'awkword').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}puttparty`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'puttparty').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}sketchheads`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
	if (message.content.startsWith(`${prefix}ocho`)) {
        if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'ocho').then(async invite => {
				return message.channel.send(`Invite: ${invite.code}`);
			});
		};
	};
});




//CLIENT STATUS add multiple status here
const activities_list = [
  "",
  //"",
  //"",
  //"",
  //""
];

//CLIENT start
client.on("ready", () => {
  console.log("I am ready!");
  setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index], { type: 'WATCHING' });
    }, 10000); // Runs this every 10 seconds
});



client.login('Token here');