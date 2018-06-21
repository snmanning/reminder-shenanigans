const chalk = require('chalk');
const moment = require('moment');
const { dateFormat, padding } = require('../config');

class Reminder {
    constructor(inputText, inputDueDate) {
        this.text = inputText;
        this.dueDate = moment(inputDueDate);
    }
    toString() {
        const dueLabel = chalk.white.bgBlue('Due');
        return ` - ${chalk.yellow(this.text).padEnd(padding)}${dueLabel} ${chalk.magenta(this.dueDate.format(dateFormat))}`;
    }
    toFileString() {
        return `${this.text} | ${this.dueDate.format(dateFormat)}`
    }
}

module.exports = Reminder;