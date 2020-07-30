module.exports = {
    name: 'hi',
    description: 'Display the hi cat Emoticat',
    execute(message, args) {
      message.channel.send(`*${message.author.username}*`)
      const { MessageAttachment } = require('discord.js');
      const attachment = new MessageAttachment('https://i.imgur.com/OK7HEt3.png');
        message.channel.send(attachment);
    }
  }