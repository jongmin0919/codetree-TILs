const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m, k] = input.shift().split(" ").map(Number);
const fine = input.map(Number);

const studentArr = Array(n).fill(0);
let who = -1;

for (let i = 0; i < m; i++) {
    studentArr[fine[i] - 1]++;
    if (studentArr[fine[i] - 1] === k) {
        who = fine[i];
        break;
    }
}

console.log(who !== undefined ? who : -1);