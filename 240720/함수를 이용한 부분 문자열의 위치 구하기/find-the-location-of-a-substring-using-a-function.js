const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let wholeStr =  input[0]
let partialStr =  input[1]

let cnt = 0;
let lastPosition = 0;
for(let i = 0 ; i < wholeStr.length ; i++){
    if(wholeStr[i] === partialStr[cnt]){
      cnt++;
      lastPosition = i  
    } 
    else cnt = 0;
    if(cnt === partialStr.length) break;
}

console.log( cnt === partialStr.length ? lastPosition-partialStr.length+1 : -1);