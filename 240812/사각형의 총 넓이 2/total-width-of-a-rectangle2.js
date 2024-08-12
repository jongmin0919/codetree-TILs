const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const count = parseInt(input.shift());

const offset = 100;
const coordinate = 201; // 0 ~ 200까지의 좌표를 포함하기 위한 크기
const arr = Array.from({ length: coordinate }, () => Array(coordinate).fill(0));

// 직사각형 좌표를 읽어와서 2차원 배열에 표시
for (let i = 0; i < count; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(point => Number(point) + offset);
    
    for (let row = x1; row < x2; row++) {
        for (let col = y1 ; col < y2 ; col++) {
            arr[row][col] = 1;
        }
    }
}

// 2차원 배열에서 1인 셀의 개수를 세어서 최종 넓이 계산
let ans = 0;
for (let row = 0; row < coordinate; row++) {
    for (let col = 0; col < coordinate; col++) {
        if (arr[row][col] === 1) {
            ans += 1;
        }
    }
}

console.log(ans);