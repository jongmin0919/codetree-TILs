const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
let num = input[0].charCodeAt(0);
let char = String.fromCharCode(input[1])

console.log(`${num} ${char}`);