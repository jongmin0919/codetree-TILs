const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split("");

let index = input.indexOf('e')
input.splice(index, 1);
console.log(input.join(""));