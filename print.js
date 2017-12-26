const chalk = require("chalk")

const print = (self, msgs) => {
    msgs.map(e => {
        self.log(chalk.bold(e.title))
        self.log(chalk.italic(e.desc))
        self.log('\n')
    })
}

module.exports = print