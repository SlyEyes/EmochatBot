// Help command
bot.on('message', message => {
  if (message.content === config.prefix + 'help') {
    message.reply("help test")
  }
})