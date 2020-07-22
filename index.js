// EasyTeach Discord's bot by SłγЗγєѕ#5557
// Github : https://github.com/SlyEyes

// Bot's base
const packages = require("./packages.json")
const auth = require("./src/auth.json")
const config = require("./config.json")
const { Client } = require('discord.js')
const Discord = require('discord.js')
const bot = new Client()

bot.on('ready', function () {
  console.log("MyFirstDiscordBot connected !\nTo turn off the bot, just closed this window, otherwise leave it open\n \nCreate by SłγЗγєѕ#5557\nDevelopper's Github : https://github.com/SlyEyes")
})

bot.login(auth.token)

// Welcome message
bot.on('guildMemberAdd', member => {
  if (config.language === "fr")
    member.createDM().then(channel => {
      return channel.send('Bienvenue ' + member.displayName + ' ! 😃\nPour que tes camarades te reconnaissent, indique ton nom et prénom à tes professeurs. 👍')
    }).catch(console.error)
  
  if (config.language === "en")
    member.createDM().then(channel => {
      return channel.send('Welcome ' + member.displayName + ' ! 😃\nTo make your classmates recognize you, tell your teachers your first and last name. 👍')
    }).catch(console.error)
})

// Help command
bot.on('message', message => {
    if (message.content === config.prefix + 'help') {
      message.reply("help test")
    }
  })