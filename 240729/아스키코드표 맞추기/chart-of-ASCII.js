const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

input = input.map(num => String.fromCharCode(num));
console.log(input.join(' '));