const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


let cnt = 0;
let max = 0;
for(let i = 0 ; i < input.length-1 ; i++){
    if(input[i] === input[i+1]){
        cnt++;
        if(max < cnt) max = cnt;
    }else cnt = 0;
}

console.log(max + 1)