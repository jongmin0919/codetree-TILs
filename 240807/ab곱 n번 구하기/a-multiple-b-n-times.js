const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const length = parseInt(input.shift());

for(let i = 0 ; i < length ;i++){
    let line = input[i].split(" ").map(Number);
    let num1 = line[0];
    let num2 = line[1];

    let sum = 1;
    for(let i = num1 ; i <= num2 ; i++){
        sum *= i;
    }
    console.log(sum);
}