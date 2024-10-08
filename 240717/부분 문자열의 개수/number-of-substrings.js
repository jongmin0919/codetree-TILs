const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [letterA, letterB] = [input[0], input[1]];

let count = 0;
for (let i = 0; i <= letterA.length - letterB.length; i++) {
    let flag = true;
    // 발견된 문자열부터 하나씩 대조해서 하나라도 틀리면 flag를 false로 바꾸고 종료
    for (let j = 0; j < letterB.length; j++) {
        if (letterA[i + j] !== letterB[j]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        count++;
    }
}

console.log(count);