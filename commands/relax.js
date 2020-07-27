module.exports = {
    name: 'relax',
    description: 'Display the relax cat Emoticat',
    execute(message, args) {
      const { MessageAttachment } = require('discord.js');
      const attachment = new MessageAttachment('https://i.imgur.com/695fG9K.png');
        message.channel.send(attachment);
    }
  }