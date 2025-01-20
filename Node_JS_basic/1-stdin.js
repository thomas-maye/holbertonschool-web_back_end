// Use the process.stdin object to read user input and print it to the console.
const std = require('process');

// Display message to the console
std.stdout.write('Welcome to Holberton School, what is your name?\n');
// Read user input
std.stdin.on('readable', () => {
  const name = std.stdin.read();
  if (name) {
    std.stdout.write(`Your name is: ${name}`);
  }
});
// When the user closes the input stream, print "This important software is now closing"
std.stdin.on('end', () => {
  console.log('This important software is now closing');
});
