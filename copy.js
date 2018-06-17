const fs = require('fs'); // this tells node that we need this module (set of functions and attributes)
console.log("Welcome to remindme");
const reminderFile = "reminders.txt";
const date = new Date().toDateString();

//fs.unlinkSync(reminderFile);

const reminders = [
    "Go to the post office",             //0 index
    "Put flea medicine on the animals",  //1
    //"Wash the sheets",                   //2
    //"Take a nap",                        //3
    //"Complete GDEV homework",            //4
];

const dates = [
    date,
    date,
    //date,
    //date,
    //date,
];

for(let i = 0; i < reminders.length; i += 1) {
             const reminder = reminders[i];
             const date = dates[i];
             const line = `${reminder}|${date}\n`; //This data is written to a file, kept-stored-read by a computer. No spaces.
            fs.appendFileSync(reminderFile, line);
            }
