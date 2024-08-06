const fs = require('fs');

// 입력을 받아서 문자열을 숫자로 변환합니다.
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input, 10);

// 재귀함수를 이용하여 피보나치 수를 계산합니다.
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// 결과를 출력합니다.
console.log(fibonacci(n));