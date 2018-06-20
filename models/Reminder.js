const chalk = require('chalk');

class Reminder {
    constructor(inputText, inputDueDate) {
        this.text = inputText;
        this.dueDate = inputDueDate;
    }
    toString() {
        const dueLabel = chalk.white.bgBlue('Due');
        return `${chalk.yellow(this.text)}    ${dueLabel} ${chalk.magenta(this.dueDate)}`;
    }
    toFileString() {
        return `${this.text} | ${this.dueDate}`
    }
}

module.exports = Reminder;