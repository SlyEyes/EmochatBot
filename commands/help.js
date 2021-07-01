module.exports = {
    name: 'help',
    description: 'Display a list of the available commands',
    execute(message, args) {
        message.delete({timeout: 1});
        message.reply({embed : {
            color: 0x00ffff,
            description: '📜 A list of all the available commands has been send in your DM',
        }})
        message.author.createDM().then(channel => {
            channel.send({embed : {
                color: 0x00ffff,
                title: `\n__Hi ${message.author.username} 👋, the next commands are available for RoboNeko :__\n\n`,
                description: '**/neko help** [*Display a list of all the available commands and their effects*])\n\n(*Go to https://github.com/users/SlyEyes/projects/2 to follow the developpement of this bot ! 🙏*)',
            }})
        })
    }
}