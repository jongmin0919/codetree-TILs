const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let cnt = 0;
for(let i = 0 ; i < input.length ; i++){
    if(input[i] === "END")break
    let word = input[i].split("").reverse().join("")
    console.log(word);
}