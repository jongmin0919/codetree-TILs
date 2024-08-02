const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = 0; i < n; i++) {
    let line = ' '.repeat(i * 2);
    for (let j = 0; j < (2 * (n - i) - 1); j++) {
        line += '*';
        if (j < (2 * (n - i) - 2)) {
            line += ' ';
        }
    }
    console.log(line);
}