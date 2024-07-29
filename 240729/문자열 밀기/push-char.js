const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.slice(1) + input.slice(0, 1);
console.log(input);