const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("");

let acc = 0;
for(let i = 0 ; i < input.length ; i++){
    if(input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57)
    acc += parseInt(input[i]);
}

console.log(acc);