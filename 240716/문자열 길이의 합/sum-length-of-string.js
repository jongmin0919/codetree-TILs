const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let count = 0;
let countA = 0;
for(let i = 1; i < input.length ; i++){
    count += input[i].length
    if(input[i][0] === 'a') countA++;
}

console.log(`${count} ${countA}`)