module.exports = {
    name: 'dance',
    description: 'Display the dance cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.delete({timeout: 1});
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://i.imgur.com/TnZpxgj.gif');
      message.channel.send(attachment);
    }
  }