module.exports = {
    name: 'lil',
    description: 'Display the lil cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.delete({timeout: 1});
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://i.imgur.com/tcmfeCH.png');
      message.channel.send(attachment);
    }
  }