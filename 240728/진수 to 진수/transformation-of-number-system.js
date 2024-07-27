const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 첫 번째 줄에서 a와 b를 추출
const [a, b] = input[0].split(" ").map(Number);

// 두 번째 줄에서 n을 추출 (a진수로 주어짐)
const n = input[1].trim();

// a진수의 n을 10진수로 변환
const decimalNumber = parseInt(n, a);

// 10진수를 b진수로 변환
function toBaseB(decimal, base) {
    if (decimal === 0) return "0";
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    while (decimal > 0) {
        result = digits[decimal % base] + result;
        decimal = Math.floor(decimal / base);
    }
    return result;
}

// 변환된 b진수 문자열을 출력
const baseBNumber = toBaseB(decimalNumber, b);
console.log(baseBNumber);