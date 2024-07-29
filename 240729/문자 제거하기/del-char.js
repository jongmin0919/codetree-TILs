const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let word = input.shift().split("");

let idx = 0
input = input.map(Number)

while(true){
    if(word.length <= input[idx]) word.splice(word.length - 1, 1)
    else word.splice(input[idx], 1);
    
    console.log(word.join(""))
    if(word.length === 1) break;
    idx++
}