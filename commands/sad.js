module.exports = {
  name: 'sad',
  description: 'Display the sad cat Emoticat',
  execute(message, args) {
    const { MessageAttachment } = require('discord.js');
    const attachment = new MessageAttachment('https://i.imgur.com/ikeebIY.png');
      message.channel.send(attachment);
  }
}