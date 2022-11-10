const spinnerChars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let timer = 100;

for (let i in spinnerChars) {
  setTimeout(() => {
    process.stdout.write(spinnerChars[i]);
  }, timer);
  timer += 200;
}

process.stdout.write('hello from spinner1.js... \rheyyy\n');