const fs = require('fs');

// 입력을 받아서 문자열을 숫자로 변환합니다.
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input, 10);

// 재귀함수를 이용하여 팩토리얼 값을 계산합니다.
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

// 결과를 출력합니다.
console.log(factorial(n));