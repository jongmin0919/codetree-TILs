const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let maxLength = -Infinity;
let minLength = Infinity;

for(let i = 0; i < input.length ; i++){
    if(input[i].length > maxLength) maxLength = input[i].length
    if(input[i].length < minLength) minLength = input[i].length
    
}

console.log(maxLength - minLength)