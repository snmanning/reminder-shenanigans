const fs = require('fs');
const ReminderList = require('../models/ReminderList');
const Reminder = require('../models/Reminder');
const { reminderFile } = require('../config');

function add(newItem) {
    console.log('Ammending a new item to your list...');
    const reminderList = new ReminderList(reminderFile);
    const reminder = new Reminder(newItem, new Date);
    reminderList.add(reminder);
    const output = reminderList.toFileOutput();
    fs.unlinkSync(reminderFile);
    fs.appendFileSync(reminderFile, output);
}

module.exports = add;