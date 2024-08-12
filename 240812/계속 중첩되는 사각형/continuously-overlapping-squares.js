const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 직사각형의 개수 N
const count = parseInt(input.shift(), 10);

const offset = 100;  // 좌표의 오프셋을 적용하여 배열의 인덱스로 변환
const coordinate = 201; // 좌표 범위를 커버하기 위한 배열 크기

// 2차원 배열을 초기화
const arr = Array.from({ length: coordinate }, () => Array(coordinate).fill(0));

// 직사각형 좌표를 읽어와서 2차원 배열에 표시
for (let i = 0; i < count; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    
    // 색상 구분: i가 짝수일 때 빨간색(1), 홀수일 때 파란색(2)
    const color = i % 2 === 0 ? 1 : 2;
    
    // 직사각형의 영역을 배열에 표시
    for (let row = x1 + offset; row < x2 + offset; row++) {
        for (let col = y1 + offset; col < y2 + offset; col++) {
            arr[row][col] = color;
        }
    }
}

// 파란색 영역(2)인 셀의 개수를 세어서 최종 넓이 계산
let ans = 0;
for (let row = 0; row < coordinate; row++) {
    for (let col = 0; col < coordinate; col++) {
        if (arr[row][col] === 2) {  // 파란색 셀
            ans += 1;
        }
    }
}

console.log(ans);