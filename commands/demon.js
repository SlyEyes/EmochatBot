module.exports = {
    name: 'demon',
    description: 'Display the demon cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.delete({timeout: 1});
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://i.imgur.com/59vOKVR.gif');
      message.channel.send(attachment);
    }
  }