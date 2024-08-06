const fs = require('fs');

// 입력을 읽어와서 배열로 변환합니다.
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄은 원소의 개수 n입니다.
const n = parseInt(input[0], 10);

// 두 번째 줄은 n개의 정수가입니다.
const numbers = input[1].split(' ').map(Number);

// 재귀 함수를 사용하여 배열의 최댓값을 찾는 함수
function findMax(arr, start, end) {
    // 기저 조건: 배열이 한 원소일 경우 그 값이 최댓값입니다.
    if (start === end) {
        return arr[start];
    }

    // 배열을 반으로 나누어 왼쪽과 오른쪽의 최댓값을 찾습니다.
    const mid = Math.floor((start + end) / 2);
    const leftMax = findMax(arr, start, mid);
    const rightMax = findMax(arr, mid + 1, end);

    // 왼쪽과 오른쪽 최댓값 중 더 큰 값을 반환합니다.
    return Math.max(leftMax, rightMax);
}

// 배열의 최댓값을 찾습니다.
const max = findMax(numbers, 0, numbers.length - 1);

// 결과를 출력합니다.
console.log(max);