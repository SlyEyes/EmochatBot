module.exports = {
  name: 'aaah',
  description: 'Display the aaah cat Emoticat',
  execute(message, args, MessageAttachment) {
    message.channel.send(`*${message.author.username}*`);
    const attachment = new MessageAttachment('https://i.imgur.com/8diTYcy.png');
    message.channel.send(attachment);
  }
}