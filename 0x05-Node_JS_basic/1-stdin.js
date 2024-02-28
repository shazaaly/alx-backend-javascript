process.stdout.write('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on((data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
}
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
