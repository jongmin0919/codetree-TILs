const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 좌표의 범위를 확장하여 배열의 크기를 설정합니다.
const offset = 1000;
const coordinate = 2001; // 0 ~ 2000까지의 좌표를 포함하기 위한 크기
const arr = Array.from({ length: coordinate }, () => Array(coordinate).fill(0));

// A,B,M 직사각형을 input에서 꺼낼 때 offset이 적용된 상태로 꺼내어서 할당
const [aRec, bRec, mRec] = input.map(arr => arr.split(" ").map(point => Number(point) + offset));

// 좌표에서 A와 B 직사각형의 범위를 1로 표시
for (const [x1, y1, x2, y2] of [aRec, bRec]) {
    for (let row = x1; row < x2; row++) {
        for (let col = y1; col < y2; col++) {
            arr[row][col] = 1;
        }
    }
}

// 좌표에서 M 직사각형 부분을 0으로 표시. 이럴 경우 1 (A와 B 직사각형의 영역)은 0으로 바뀜
const [x1, y1, x2, y2] = mRec;
for (let row = x1; row < x2; row++) {
    for (let col = y1; col < y2; col++) {
        arr[row][col] = 0;
    }
}

// 남아있는 직사각형 A와 B의 넓이를 계산
let counts = 0;
for (let row = 0; row < coordinate; row++) {
    for (let col = 0; col < coordinate; col++) {
        if (arr[row][col] === 1) {
            counts += 1;
        }
    }
}

console.log(counts);