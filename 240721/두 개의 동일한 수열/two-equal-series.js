const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const length = parseInt(input[0].split(" ")[0]);

let numbersA = input[1].split(" ").map(Number).sort((a,b) => a-b);
let numbersB = input[2].split(" ").map(Number).sort((a,b) => a-b);

console.log(numbersA.join(" ") === numbersB.join(" ") ? "Yes" : "No");