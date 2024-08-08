const fs = require('fs');

// 입력을 읽어와서 정수로 변환합니다.
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0], 10);
const numbers = input[1].split(' ').map(Number);

// 최대공약수(GCD)를 구하는 재귀 함수
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// 두 수의 최소공배수(LCM)를 구하는 함수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// 배열의 모든 수에 대해 LCM을 재귀적으로 구하는 함수
function lcmArray(arr, index = 0) {
    if (index === arr.length - 1) return arr[index];
    return lcm(arr[index], lcmArray(arr, index + 1));
}

// 결과를 계산하고 출력합니다.
const result = lcmArray(numbers);
console.log(result);