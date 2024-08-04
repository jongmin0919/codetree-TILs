const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

let cnt = 1;
let max = 1;

if(input.length > 2){
    for (let i = 1; i < input.length; i++) {
        if (input[i] > input[i - 1]) {
            cnt++;
            if (max < cnt) max = cnt;
        } else {
            cnt = 1; // 여기서 cnt를 1로 초기화해야 합니다.
        }
    }
}else max = 1;

console.log(max);