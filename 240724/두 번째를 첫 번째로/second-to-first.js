const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let first = input[0];
let second = input[1];
let str = input.split("").map(item => item == second ? first : item).join("");
console.log(str);