// RoboNeko#8111 by SłγЗγєѕ#5557
// Github : https://github.com/SlyEyes

// Const of the bot
const Discord = require('discord.js');
const { Client, Collection, MessageAttachment } = require('discord.js');
const client = new Client();
const fs = require("fs");
const package = require("./package.json");
const v = package.version;
const auth = require("./modules/auth.json");
const config = require("./modules/config.json");
const prefix = config.prefix
const lang = config.language
client.commands = new Collection();

// Connection with the token
client.login(auth.token)

// Status of the bot
client.on("ready", () =>{
  client.user.setPresence({
      status: "online",
      activity: {
          name: "$help",
          type: "PLAYING"
  }})
})

// Search for the command file and add it to a collection
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command)
}
console.log(client.commands);

// Connection established message
client.on('ready', function () {
  console.log("\nRoboNeko#8111 connected !");
})

// Read the message of the user and execute or not a command
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  const num = args;

  try {
    client.commands.get(command).execute(message, args, num, MessageAttachment);
  } catch (err) {
    message.channel.send({embed : {
      color: 0xff0000,
      description: '❌ The ' + '\"' + command + '\"' + ' command doesn\'t exist or I don\'t have the permission to act !',
    }})
    console.log(err);
  }
});

// Send a message when the bot joining a server
client.on('guildCreate', guild => {
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send({embed: {
      color: 0x00ffff,
      title: '__Hi there 👋 ! I\'m RoboNeko ' + v + ', thanks to invite me !__',
      description: 'Type **$help** to begin.\n\n(*Go to https://github.com/users/SlyEyes/projects/2 to follow the developpement of this bot ! 🙏*)',
      thumbnail: {url: 'https://slyeyes.github.io/RoboNeko/images/logo.png'},
    }})
})
