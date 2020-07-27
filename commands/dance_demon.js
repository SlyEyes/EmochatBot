module.exports = {
    name: 'dance_demon',
    description: 'Display the dance_demon cat Emoticat',
    execute(message, args) {
      const { MessageAttachment } = require('discord.js');
      const attachment = new MessageAttachment('https://i.imgur.com/f5jji3e.gif');
        message.channel.send(attachment);
    }
  }