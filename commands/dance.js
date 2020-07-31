module.exports = {
    name: 'dance',
    description: 'Display the dance cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://i.imgur.com/nu7nWh8.gif');
      message.channel.send(attachment);
    }
  }