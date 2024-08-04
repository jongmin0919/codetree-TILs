const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


let cnt = 1;
let max = 0;
for(let i = 0 ; i < input.length-2 ; i++){
    if(input[i] < input[i + 1]){
        cnt++;
        if(max < cnt) max = cnt;
    }else cnt = 1;
}

console.log(max === 0 ? 1 : max)