const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let wholeStr = input[0];
let partialStr = input[1];

// 나 여태까지 뭔 뻘짓을 한거지...?
console.log(wholeStr.indexOf(partialStr));