module.exports = {
  name: 'sad',
  description: 'Display the sad cat Emoticat',
  execute(message, args, MessageAttachment) {
    message.channel.send(`*${message.author.username}*`);
    const attachment = new MessageAttachment('https://i.imgur.com/ikeebIY.png');
    message.channel.send(attachment);
  }
}