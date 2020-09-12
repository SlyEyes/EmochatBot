module.exports = {
    name: 'raaage',
    description: 'Display the raaage cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.delete({timeout: 1});
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://i.imgur.com/YkuClUd.png');
      message.channel.send(attachment);
    }
  }