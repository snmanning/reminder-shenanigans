
const fs = require('fs'); // this tells node that we need this module (set of functions and attributes)
console.log("Welcome to remindme");
const reminderFile = "reminders.txt";
const date = new Date().toDateString();

//fs.unlinkSync(reminderFile);

/*const reminders = [
    "Go to the post office",             //0 index
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
*/

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
    /*if(reminderFile === null) {
        console.log("You have nothing to complete today");
    }
    else if(reminderFile !== null) {}
     */  
        console.log('Here are the things you need to do:');
    
     const lines = fs.readFileSync(reminderFile, 'utf8').split(`\n`);
    const parsedLine = lines.map(line => line.split("|"));
    const humanFriendlyLines = parsedLine.map(parsedLine => {
        const reminder = parsedLine[0];
        const date = parsedLine[1];
        return `${reminder}    Due: ${date}`; //data presented to a person can be spaced. 
                                                //It makes it easier to read
    })
    const output = humanFriendlyLines.join(`\n`);
        console.log(output);
}
 
function add(newItem) {
    console.log('Ammending a new item to your list...');
    const lines = fs.readFileSync(reminderFile, 'utf8').split(`\n`);
    const parsedLines = lines.map(line => line.split('|'));
    //parsedLines.push([newItem, new Date()]);
    const newLine = [newItem, new Date().toDateString()];
    const withAddition = parsedLines.concat(newLine);
    fs.unlinkSync(reminderFile);
    const outputLines = withAddition.map(line => {
        const reminder = line[0];
        const date = new Date().toDateString()[1];
        return `- ${reminder} | ${date}`;
    });
    const output = outputLines.join(`\n`);
    fs.appendFileSync(reminderFile, output);

        //for loop
        /*for(let i = 0; i < reminders.length; i += 1) {
             const reminder = reminders[i];
             const date = dates[i];
             const line = `${reminder}|${date}\n`; //This data is written to a file, kept-stored-read by a computer. No spaces.
            fs.appendFileSync(reminderFile, line);
            }
        
}
*/
function help() {
   console.log('I cannot complete this request, please try again. :(');
};
}