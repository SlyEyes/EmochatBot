module.exports = {
    name: 'lil',
    description: 'Display the lil cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://i.imgur.com/GMm1Uvt.png');
      message.channel.send(attachment);
    }
  }