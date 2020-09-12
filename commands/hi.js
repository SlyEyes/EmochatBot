module.exports = {
    name: 'hi',
    description: 'Display the hi cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.delete({timeout: 1});
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://i.imgur.com/BLJr0CQ.png');
      message.channel.send(attachment);
    }
  }