const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let num1 = "";
let num2 = "";

for(let i = 0 ; i < input[0].length ; i++){
    if(input[0][i] >= 0 && input[0][i] <= 9) num1 += input[0][i]
    else continue;
}

for(let i = 0 ; i < input[1].length ; i++){
    if(input[1][i] >= 0 && input[1][i] <= 9) num2 += input[1][i]
    else continue;
}

console.log(parseInt(num1) + parseInt(num2))