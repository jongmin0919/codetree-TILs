const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let str = "";
for(let i = 0 ; i < input.length ; i++){
    if(input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90 || input[i].charCodeAt(0) >= 97 && input[i].charCodeAt(0) <= 122 || input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57)
    str += input[i];
}

console.log(str.toLowerCase());