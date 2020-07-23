// EmoticatBot by SłγЗγєѕ#5557
// Github : https://github.com/SlyEyes

// Bot's base
const packages = require("./packages.json")
const Discord = require('discord.js')
const { Client } = require('discord.js')
const auth = require("./auth.json")
const bot = new Client()
const config = require("./config.json")

bot.on('ready', function () {
  console.log("EmoticatBot connected !\nTo turn off the bot, just closed this window, otherwise leave it open\n \nCreate by SłγЗγєѕ#5557\nDevelopper's Github : https://github.com/SlyEyes")
})

bot.login(auth.token)

// Help List command (<help)

bot.on('message', message => {
  if (message.content === config.prefix + 'help') {
      message.reply("\n__Hi there, the next commands are available for EmoticatBot :__\n**<help** [*Display a list of all the available commands and their effects*]\n**<aaah_cat** [*Aaah cat Emoticat*]\n**<relax_cat** [*Relax cat Emoticat*]\n**<sad_cat** [*Sad cat Emoticat*]\n**<hi_cat** [*Hi cat Emoticat*]\n**<raaage_cat** [*Raaage cat Emoticat*]\n**<lil_cat** [*Lil cat Emoticat*]\n**<dance_cat** [*Dance cat Emoticat*]\n**<demon_dance_cat** [*Demon dance cat Emoticat*]\n(*Go to https://github.com/users/SlyEyes/projects/2 to follow the developpement of this bot !*)")
  }
})

// Emoticat command

  // <aaah_cat
bot.on('message', message => {
  if (message.content === config.prefix + 'aaah_cat') {
      message.reply({files: ["https://i.imgur.com/idtdsZK.png"]})
  }
})

  // <relax_cat


  // <sad_cat


  // <hi_cat


  // <raaage_cat


  // <lil_cat


  // <dance_cat


  // <demon_dance_cat