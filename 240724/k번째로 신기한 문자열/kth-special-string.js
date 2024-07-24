const fs = require('fs');
let arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, position, startLetter] = arr.shift().split(" ");

console.log(arr.filter(item => item.slice(0,startLetter.length) == startLetter).sort()[position-1]);