const config = require('../config');
const ReminderList = require('../models/ReminderList');
const reminderFile = config.reminderFile;

function list() {
    console.log('Here are the things you need to do:');
    const reminderList = new Reminder(reminderFile);
    reminderList.toConsole();
}

module.exports = list;