
const fs = require('fs'); // this tells node that we need this module (set of functions and attributes)
console.log("Welcome to remindme");
const reminderFile = "reminders.txt";

fs.unlinkSync(reminderFile);
const reminders = [
    "Go to the post office",             //0
    "Put flea medicine on the animals",  //1
    "Wash the sheets",                   //2
    "Take a nap",                        //3
    "Complete GDEV homework",            //4
];

const dates = [
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
];

//list command, where all of the reminders are printed
//add command where we can add a reminder
const args = process.argv.slice(2);
const subcommand = args[0];

if(subcommand === 'list') {
    list();
}
else if(subcommand === 'add') {
    add();
}
else {
    help();
}

process.exit(0);
console.log("Done");


function list() {
    console.log('Here are the things you need to do:');
    reminders.forEach((reminder, index) => {
        const line = `   ${reminder}    Due: ${dates[index]}`;
        console.log(line);
    });
}
 
function add() {
    console.log('add');
//for loop
for(let i = 0; i < reminders.length; i += 1) {
    const reminder = reminders[i];
    const date = dates[i];
    const line = `${reminder}|${date}\n`;
    fs.appendFileSync(reminderFile, line);
    }
}

function help() {
    console.log('I cannot complete this request, please try again.');
}