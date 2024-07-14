// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 2차원 배열을 구현합니다.
let arr2d = [];

// 각 줄마다 알파벳 소문자를 입력받습니다.
for (let i = 0; i < 5; i++) {
    arr2d.push(input[i].split(" "));
}

// 대문자와 소문자의 아스키 코드의 차이를 기록해둡니다.
let diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);

// 알파벳 소문자를 대문자로 바꾸어 출력합니다.
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 3; j++) {
        str += String.fromCharCode(arr2d[i][j].charCodeAt(0) - diff
        ) + ' ';
    }
    console.log(str);
}