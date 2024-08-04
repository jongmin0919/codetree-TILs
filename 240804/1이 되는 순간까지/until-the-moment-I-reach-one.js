const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

function countOperations(n) {
    // 기저 조건: n이 1이면 작업을 종료하고 0을 반환
    if (n === 1) {
        return 0;
    }
    
    // 작업을 수행하고 재귀 호출 (각 작업에 1을 더해 작업한 횟수를 카운트 하도록 함)
    if (n % 2 === 0) {
        // n이 짝수일 때 2로 나누기
        return 1 + countOperations(n / 2);
    } else {
        // n이 홀수일 때 3으로 나누기
        return 1 + countOperations(Math.floor(n / 3));
    }
}

console.log(countOperations(input));