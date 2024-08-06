const fs = require('fs');

// 입력을 받아서 문자열을 숫자로 변환합니다.
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input, 10);

// 홀수 합 계산을 위한 재귀 함수
function sumOdd(num) {
    if (num <= 0) {
        return 0;
    }
    if (num % 2 !== 0) {
        return num + sumOdd(num - 2);
    } else {
        return sumOdd(num - 1);
    }
}

// 짝수 합 계산을 위한 재귀 함수
function sumEven(num) {
    if (num < 2) {
        return 0;
    }
    if (num % 2 === 0) {
        return num + sumEven(num - 2);
    } else {
        return sumEven(num - 1);
    }
}

// 결과 출력
if (n % 2 === 0) {
    console.log(sumEven(n));
} else {
    console.log(sumOdd(n));
}