const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let result = 0;
function accNum(n) {
    if (n <= 0) {
        return;
    }
    accNum(n - 1);
    result += n
}

accNum(input);
console.log(result)