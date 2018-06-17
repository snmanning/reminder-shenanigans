
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

console.log("Done");
process.exit(0);


// These will be hoisted into their callback when they are needed.
function list() {
    console.log('Here are the things you need to do:');
    const lines = fs.readFileSync(reminderFile, 'utf8').split(`\n`);
    const parsedLines = lines.map(lines => line.split("|"));
    reminders.forEach((reminder, index) => {
        const line = `   ${reminder}    Due: ${dates[index]}`; //data presented to a person can be spaced. It makes it easier to read
        console.log(line);
    });

}
 
function add() {
    console.log('add');
//for loop
for(let i = 0; i < reminders.length; i += 1) {
    const reminder = reminders[i];
    const date = dates[i];
    const line = `${reminder}|${date}\n`; //This data is written to a file, kept-stored-read by a computer. No spaces.
    fs.appendFileSync(reminderFile, line);
    }
}

function help() {
    console.log('I cannot complete this request, please try again.');
}