// EmochatBot by SłγЗγєѕ#5557
// Github : https://github.com/SlyEyes

// Bot's base
const packages = require("./packages.json")
const auth = require("./src/auth.json")
const config = require("./config.json")
const { Client } = require('discord.js')
const Discord = require('discord.js')
const bot = new Client()

bot.on('ready', function () {
  console.log("EmochatBot connected !\nTo turn off the bot, just closed this window, otherwise leave it open\n \nCreate by SłγЗγєѕ#5557\nDevelopper's Github : https://github.com/SlyEyes")
})

bot.login(auth.token)

// Help command
bot.on('message', message => {
    if (message.content === config.prefix + 'help') {
      message.reply("help test")
    }
  })