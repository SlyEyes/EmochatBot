module.exports = {
    name: 'raaage',
    description: 'Display the raaage cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://i.imgur.com/MtybPyO.png');
      message.channel.send(attachment);
    }
  }