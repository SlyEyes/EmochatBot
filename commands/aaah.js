module.exports = {
  name: 'aaah',
  description: 'Display the aaah cat Emoticat',
  execute(message, args) {
    const { MessageAttachment } = require('discord.js');
    const attachment = new MessageAttachment('https://i.imgur.com/8diTYcy.png');
      message.channel.send(attachment);
  }
}