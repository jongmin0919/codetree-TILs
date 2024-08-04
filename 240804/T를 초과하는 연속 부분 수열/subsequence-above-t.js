const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [count, aim] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let cnt = 1;
let max = 0;

if(numbers.length > 1){
    for(let i = 1 ; i < count ; i++){
        if(numbers[i] > aim && numbers[i-1] > aim){
            cnt++;
            if (max < cnt) max = cnt;
        }else  cnt = 1;
    }
}else max = 1;

console.log(max === 0 ? 1 : max);