const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = 0; i < n; i++) {
    let line = ' '.repeat((n - i - 1) * 2);
    for (let j = 0; j < (2 * i + 1); j++) {
        line += '*';
        if (j < (2 * i)) {
            line += ' ';
        }
    }
    console.log(line);
}