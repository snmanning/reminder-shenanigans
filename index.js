#!/usr/bin/env node
const chalk = require('chalk');

console.log(chalk.yellow("Welcome to remindme"));

const list = require('./commands/list');
const add = require('./commands/add');
const help = require('./commands/help');

const fs = require('fs');
const { reminderFile } = require('./config');

//list command, where all of the reminders are printed to scrceen
//add command where we can add a reminder to the existing list

if(!fs.existsSync(reminderFile)) {
    fs.openSync(reminderFile, 'a');
}

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

console.log(chalk.bgYellow.green.italic("Ou fin! :)"));
process.exit(0);
