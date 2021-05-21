module.exports = {
    name: 'relax',
    description: 'Display the relax cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.delete({timeout: 0});
      if (args > 4) {
        message.channel.send({embed : {
          color: 0xff0000,
          description: '❌ The number ' + '\"' + args + '\"' + ' is to high for me !',
        }});
      } else {
        message.channel.send(`*${message.author.username}*`);
        const attachment = new MessageAttachment('https://slyeyes.github.io/RoboNeko/images/relax.png');
        message.channel.send(attachment)
        while (args > 1 ) {
          args = args - 1;
          message.channel.send(attachment);
        }
      }
    }
  }