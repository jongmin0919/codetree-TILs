const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n - i; j++) {
        line += '*';
    }
    for (let j = 0; j < 2 * i; j++) {
        line += ' ';
    }
    for (let j = 0; j < n - i; j++) {
        line += '*';
    }
    console.log(line);
}