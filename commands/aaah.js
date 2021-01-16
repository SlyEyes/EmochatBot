module.exports = {
  name: 'aaah',
  description: 'Display the aaah cat Emoticat',
  execute(message, args, num, MessageAttachment) {
    message.delete({timeout: 0});
    if (num > 4) {
      message.channel.send({embed : {
        color: 0xff0000,
        description: '❌ The number ' + '\"' + num + '\"' + ' is to high for me !',
      }});
    } else {
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://slyeyes.github.io/RoboNeko/images/aaah.png');
      message.channel.send(attachment)
      while (num > 1 ) {
        num = num - 1;
        message.channel.send(attachment);
      }
    }
  }
}