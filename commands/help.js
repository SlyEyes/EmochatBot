module.exports = {
    name: 'help',
    description: 'Display a list of the available commands',
    execute(message, args) {
        message.reply({embed : {
            color: 0x00ffff,
            title: '\n__Hi there, the next commands are available for EmoticatBot :__\n\n',
            description: '**<help** [*Display a list of all the available commands and their effects*]\n**<aaah** [*Aaah cat Emoticat*]\n**<relax** [*Relax cat Emoticat*]\n**<sad** [*Sad cat Emoticat*]\n**<hi** [*Hi cat Emoticat*]\n**<raaage** [*Raaage cat Emoticat*]\n**<lil** [*Lil cat Emoticat*]\n**<dance** [*Dance cat Emoticat*]\n**<dance_demon** [*Demon dance cat Emoticat*]\n\n(*Go to https://github.com/users/SlyEyes/projects/2 to follow the developpement of this bot !*)',
          }})
    }
}