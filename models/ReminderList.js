const fs = require('fs');
const Reminder = require('./Reminder');
const moment = require('moment');
const { dateFormat } = require('../config');

class ReminderList {
    constructor(filepath) {
        this.filepath = filepath;
        this.reminders = fs.readFileSync(this.filepath, 'utf8')
                            .split(`\n`)
                            .filter((line) => line !== "")
                            .map((line) => line.split("|"))
                            .map((parsedLine) => 
                                    new Reminder(parsedLine[0], moment(parsedLine[1], dateFormat)));
        }

    add(reminder) {
        this.reminders.push(reminder);
    }

    toFileOutput() {
        const output = this.reminders
                        .map((reminder) => reminder.toFileString())
                        .join(`\n`);
        return output;
    }

    toConsole() {
        const output = this.reminders
                        .map((reminder) => reminder.toString())
                        .join(`\n`);
        console.log(output);
    }
}

module.exports = ReminderList;