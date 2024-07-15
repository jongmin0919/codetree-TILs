const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let words = input[0];
let word = input[1]

let countLower = 0;

for(let i = 0 ; i < words.length ; i++){
    if(words[i] === word) countLower++;
}

console.log(countLower);