const fs = require('fs');

// 입력을 읽어와서 정수로 변환합니다.
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input, 10);

// 재귀 함수를 이용하여 반복 횟수를 계산하는 함수
function collatzSteps(n) {
    // 기저 조건: n이 1이 되면 0을 반환합니다.
    if (n === 1) {
        return 0;
    }

    // 짝수인 경우: n / 2를 재귀 호출
    if (n % 2 === 0) {
        return 1 + collatzSteps(n / 2);
    }

    // 홀수인 경우: 3 * n + 1을 재귀 호출
    return 1 + collatzSteps(3 * n + 1);
}

// 결과를 계산하여 출력합니다.
console.log(collatzSteps(n));