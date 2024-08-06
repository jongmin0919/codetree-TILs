const fs = require('fs');

// 입력을 읽어와서 정수로 변환합니다.
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input, 10);

// 수열의 값을 구하는 재귀 함수
function sequence(n, memo = {1: 2, 2: 4}) {
    if (n in memo) {
        return memo[n];
    }

    // 재귀 호출을 통해 N번째 값을 계산합니다.
    const prev1 = sequence(n - 1, memo);
    const prev2 = sequence(n - 2, memo);

    // 현재 항을 계산하여 메모에 저장합니다.
    memo[n] = (prev1 * prev2) % 100;
    return memo[n];
}

// 결과를 계산하여 출력합니다.
console.log(sequence(N));