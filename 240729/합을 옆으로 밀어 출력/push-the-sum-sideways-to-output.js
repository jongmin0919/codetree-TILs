const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
input.shift();

let result = 0;
input.forEach(num => {
    result += num;
})
result = result.toString();
console.log(result.slice(1) + result[0]);