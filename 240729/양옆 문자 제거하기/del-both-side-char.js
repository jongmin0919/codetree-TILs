const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split("");

input.splice(1,1);
input.splice(input.length - 2,1);

console.log(input.join(""))