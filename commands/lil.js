module.exports = {
    name: 'lil',
    description: 'Display the lil cat Emoticat',
    execute(message, args) {
      const { MessageAttachment } = require('discord.js');
      const attachment = new MessageAttachment('https://i.imgur.com/GMm1Uvt.png');
        message.channel.send(attachment);
    }
  }