module.exports = {
    name: 'relax',
    description: 'Display the relax cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://i.imgur.com/695fG9K.png');
      message.channel.send(attachment);
    }
  }