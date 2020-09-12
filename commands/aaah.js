module.exports = {
  name: 'aaah',
  description: 'Display the aaah cat Emoticat',
  execute(message, args, MessageAttachment) {
    message.delete({timeout: 1});
    message.channel.send(`*${message.author.username}*`);
    const attachment = new MessageAttachment('https://i.imgur.com/x1oEuWG.png');
    message.channel.send(attachment);
  }
}