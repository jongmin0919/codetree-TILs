const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [range, length] = input.shift().split(" ")

const arr = Array.from({length : range}, ()=>0);

for(let i = 0 ; i < length ; i++){
    const [startPoint, endPoint] = input[i].split(" ").map(Number);
        for(let i = startPoint - 1 ; i < endPoint ; i++){
            arr[i]++;
        }
}
console.log(arr.sort((a,b) => b-a)[0])