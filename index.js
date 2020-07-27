// EmoticatBot by SłγЗγєѕ#5557
// Github : https://github.com/SlyEyes

// Need of the bot
const Discord = require('discord.js');
const { Client, Collection } = require('discord.js');
const client = new Client();
const fs = require("fs");
const packages = require("./packages.json");
const auth = require("./modules/auth.json");
const config = require("./modules/config.json");
const prefix = config.prefix
client.commands = new Collection(),

client.login(auth.token)

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command)
  console.log(client.commands);
}

client.on('ready', function () {
  console.log("EmoticatBot#8111 connected !");
})

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  try {
    client.commands.get(command).execute(message, args);
  } catch (err) {
    message.channel.send({embed : {
      color: 0xff0000,
      description: 'This command doesn\'t exist !',
    }})
  
}});