module.exports = {
  name: 'sad',
  description: 'Display the sad cat Emoticat',
  execute(message, args, MessageAttachment) {
    message.delete({timeout: 1});
    message.channel.send(`*${message.author.username}*`);
    const attachment = new MessageAttachment('https://i.imgur.com/abuLKUX.png');
    message.channel.send(attachment);
  }
}