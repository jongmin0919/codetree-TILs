const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const A = input[0];
const B = input[1];

// 문자열 A의 길이
const len = A.length;

// 함수: 문자열을 우측으로 한 칸 밀기
function shiftRight(str) {
    return str[len - 1] + str.substring(0, len - 1);
}

// 초기값 설정
let shiftedA = A;
let result = -1;

// n번 만큼 문자열을 우측으로 밀면서 문자열 B와 비교
for (let n = 1; n <= len; n++) {
    shiftedA = shiftRight(shiftedA);
    if (shiftedA === B) {
        result = n;
        break;
    }
}

// 결과 출력
console.log(result);