const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a, b] = [parseInt(input[0]), parseInt(input[1])]

function isFulfilledNumber(num){
    if(num%3 === 0 || num.toString().includes('3') || num.toString().includes('6') || num.toString().includes('9')) return 1
    else return 0;
}

let cnt = 0;
for(let i = a ; i <= b ; i++){
    cnt += isFulfilledNumber(i);
}

console.log(cnt);