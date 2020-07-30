module.exports = {
    name: 'dance',
    description: 'Display the dance cat Emoticat',
    execute(message, args) {
      message.channel.send(`*${message.author.username}*`)
      const { MessageAttachment } = require('discord.js');
      const attachment = new MessageAttachment('https://i.imgur.com/nu7nWh8.gif');
        message.channel.send(attachment);
    }
  }