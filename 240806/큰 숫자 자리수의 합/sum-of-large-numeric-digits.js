const fs = require('fs');

// 입력을 읽어와서 문자열을 공백으로 구분하여 배열로 변환합니다.
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// 3개의 정수를 가져옵니다.
const num1 = input[0];
const num2 = input[1];
const num3 = input[2];

// 세 숫자를 곱합니다.
const product = num1 * num2 * num3;

// 각 자리 숫자들의 합을 구하는 재귀 함수
function sumOfDigits(n) {
    // 기저 조건: n이 0일 때 0을 반환합니다.
    if (n === 0) {
        return 0;
    }

    // 재귀 호출: n % 10은 마지막 자리 숫자, n / 10은 나머지 숫자들입니다.
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// 곱셈 결과의 자리 숫자들의 합을 구합니다.
const result = sumOfDigits(product);

// 결과를 출력합니다.
console.log(result);