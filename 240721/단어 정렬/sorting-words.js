const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let length = parseInt(input.shift());

input.sort();
for(let i = 0 ; i < input.length ; i++){
    console.log(input[i]);
}