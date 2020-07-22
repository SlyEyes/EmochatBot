// EmoticatBot by SłγЗγєѕ#5557
// Github : https://github.com/SlyEyes

// Bot's base
const packages = require("./packages.json")
const auth = require("./auth.json")
const { Client } = require('discord.js')
const Discord = require('discord.js')
const bot = new Client()
const config = require("./config.json")

bot.on('ready', function () {
  console.log("EmoticatBot connected !\nTo turn off the bot, just closed this window, otherwise leave it open\n \nCreate by SłγЗγєѕ#5557\nDevelopper's Github : https://github.com/SlyEyes")
})

bot.login(auth.token)

// Help command
bot.on('message', message => {
    if (message.content === config.prefix + 'help') {
        message.reply("\nUse " + config.prefix + "help [name of the command] for help on a command\nUse " + config.prefix + "list for a list of the command and the Emoticat")
    }
})

bot.on('message', message => {
  if (message.content === config.prefix + 'help list') {
      message.reply("\nThis command display a list of all the command and Emoticat available")
  }
})

// List command

bot.on('message', message => {
  if (message.content === config.prefix + 'list') {
      message.reply("\nThe next commands are available :\nhelp [name of the command]\nlist")
  }
})

// Emoticat command