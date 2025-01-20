/**
 * 
 * function that displays a prompt to the user and listens for the user's input
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
});

rl.on('close', () => {
    if (!process.stdin.isTTY) {
        console.log('This important software is now closing');
    }
    process.exit(0);
});

module.exports = process;