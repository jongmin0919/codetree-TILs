const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const length = input.shift();

for(let i = 0 ; i < length ; i++){
    let arr = input[i].split(" ").map(Number);
    let numA = arr[0];
    let numB = arr[1];
    let tempArr = [];
    for(let j = numA ; j <= numB ; j++){
        if(j%2 === 0) tempArr.push(j);
    }
    console.log(tempArr.reduce((acc, cur) => acc + cur, 0));
}