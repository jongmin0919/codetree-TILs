const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("").map(Number);

let result = 0;
input.forEach(num => {
    result += num;
})

console.log(result);