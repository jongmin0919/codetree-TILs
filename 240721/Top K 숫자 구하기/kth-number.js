const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const length = parseInt(input[0].split(" ")[0]);
const num = parseInt(input[0].split(" ")[1]);

let numbers = input[1].split(" ").map(Number);

console.log(numbers.sort()[num-1]);