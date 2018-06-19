
const fs = require('fs'); // this tells node that we need this module (set of functions and attributes)
console.log("Welcome to remindme");
const reminderFile = "reminders.txt";


//const today = new Date();
//const date = today.toDateString();

//templates for objects
class ReminderList {
    constructor(filepath) {
        this.filepath = filepath;
        const lines = fs.readFileSync(reminderFile, 'utf8').split(`\n`);
        const parsedLine = lines.map(line => line.split("|"));
        const humanFriendlyLines = parsedLine.map(parsedLine => {
        const reminder = new Reminder(parsedLine[0], parsedLine[1]);
        return reminder;
            });
        this.reminders = humanFriendlyLines;
    }

    add(reminder) {
        this.reminders.push(reminder);
    }

    toFileOutput() {
        const fileString = this.reminders.map((reminder) => reminder.toFileString());
        const output = fileString.join(`\n`);
        return output;
    }

    toConsole() {
        const reminderString = this.reminders.map((reminder) => toString());
        const output = reminderString.join(`\n`);
        console.log(output);
    }
}

class Reminder {
    constructor(inputText, inputDueDate) {
        this.text = inputText;
        this.dueDate = inputDueDate;
    }
    toString() {
        return `${this.text}    Due: ${this.dueDate}`;
    }
    toFileString() {
        return `${this.text} | ${this.dueDate}`
    }
}

//list command, where all of the reminders are printed to scrceen
//add command where we can add a reminder to the existing list
const args = process.argv.slice(2);
const subcommand = args[0];

if(subcommand === 'list') {
    list();
    }
else if(subcommand === 'add') {
    const reminder = args[1];
    add(reminder);
    }
else {
    help();
        }

console.log("Ou fin! :)");
process.exit(0);




// These will be hoisted into their callback when they are needed.
function list() {
        console.log('Here are the things you need to do:');
        const reminderList = new Reminder(reminderFile);
        reminderList.toConsole();
}
 
function add(newItem) {
    console.log('Ammending a new item to your list...');
    const reminderList = new ReminderList(reminderFile);
    const reminder = new Reminder(newItem, new Date);
    reminderList.add(reminder);
    const output = reminderList.toFileOutput();
    fs.unlinkSync(reminderFile);
    fs.appendFileSync(reminderFile, output);
}

function help() {
    console.log('Unable to process the request. Please try again.');
    }