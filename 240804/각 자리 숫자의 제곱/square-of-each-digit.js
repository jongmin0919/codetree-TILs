const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

function sumOfSquares(n) {
    // 기저 조건: n이 0보다 작으면 종료
    if (n === 0) {
        return 0;
    }
    // 현재 자리 숫자의 제곱을 계산하고 나머지 숫자에 대해 재귀 호출
    return sumOfSquares(parseInt(n / 10)) + (n % 10) ** 2;
}

console.log(sumOfSquares(input));