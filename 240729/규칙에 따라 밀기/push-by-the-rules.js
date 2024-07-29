const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 첫 번째 줄: 문자열
let word = input.shift();

// 두 번째 줄: 이동 명령
let orders = input.shift().split(""); // "LRLR" 같은 문자열을 배열로 분리

const length = word.length;

for (let i = 0; i < orders.length; i++) {
    let ask = orders[i];
    switch (ask) {
        case "L":
            // 왼쪽으로 한 글자 밀어내기
            word = word.slice(1) + word[0];
            break;
        case "R":
            // 오른쪽으로 한 글자 밀어내기
            word = word[length - 1] + word.slice(0, length - 1);
            break;
    }
}
console.log(word);