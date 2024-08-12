const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 색종이의 개수 N
const count = parseInt(input.shift(), 10);

const offset = 100;  // 좌표의 오프셋을 적용하여 배열의 인덱스로 변환
const coordinate = 201; // 좌표 범위를 커버하기 위한 배열 크기

// 2차원 배열을 초기화
const arr = Array.from({ length: coordinate }, () => Array(coordinate).fill(0));

// 색종이 좌표를 읽어와서 2차원 배열에 표시
for (let i = 0; i < count; i++) {
    const [x1, y1] = input[i].split(" ").map(point => Number(point) + offset);
    // 색종이의 끝 좌표 길이(가로 세로 길이)를 각각 8을 더해 할당
    const [x2, y2] = [x1 + 8, y1 + 8]   
    
    // 색종이의 영역을 좌표에 표시
    for (let row = x1; row < x2; row++) {
        for (let col = y1; col < y2; col++) {
            arr[row][col] = 1;
        }
    }
}

// 2차원 배열에서 1인 좌표를 개수를 세어서 최종 넓이 계산
let ans = 0;
for (let row = 0; row < coordinate; row++) {
    for (let col = 0; col < coordinate; col++) {
        if (arr[row][col] === 1) {
            ans += 1;
        }
    }
}

console.log(ans);