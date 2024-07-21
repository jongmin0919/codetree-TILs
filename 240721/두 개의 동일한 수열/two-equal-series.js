const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 뭔지는 모르겠지만 split을 실행하면 없던 0이 생겨버림. 그래서 filter로 false(0) 값을 제거함. 
// 조건도 원소의 값은 1부터 100까지이니 0은 없어도 됨.
let numbersA = input[1].split(" ").filter(n => n).map(Number).sort((a, b) => a - b);
let numbersB = input[2].split(" ").filter(n => n).map(Number).sort((a, b) => a - b);

let flag = true;
if (numbersA.length !== numbersB.length) {
    flag = false;
} else {
    numbersA.forEach((num, idx) => {
        if (num !== numbersB[idx]) {
            flag = false;
        }
    });
}

console.log(flag ? "Yes" : "No");