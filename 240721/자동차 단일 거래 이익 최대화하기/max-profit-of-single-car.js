const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(" ").map(Number);
let acc = 0;

let maxStack = [];
for(let i = 0 ; i < arr.length-1 ; i++){
    if(arr[i] - arr[i+1] < 0){
        
        acc += Math.abs(arr[i] - arr[i+1]);
        maxStack.push(acc);
    }else acc = 0;
}
let maxEarnings = Math.max(...maxStack)

console.log(maxEarnings > 0 ? maxEarnings : 0);