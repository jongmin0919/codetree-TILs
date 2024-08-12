const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 첫 번째 직사각형 좌표
const [x1_A, y1_A, x2_A, y2_A] = input[0].split(" ").map(Number);
// 두 번째 직사각형 좌표
const [x1_B, y1_B, x2_B, y2_B] = input[1].split(" ").map(Number);

// 좌표 오프셋과 배열 크기 정의
const offset = 1000;
const coordinate = 2001; // -1000 to 1000 inclusive

// 2차원 배열을 초기화
const arr = Array.from({ length: coordinate }, () => Array(coordinate).fill(0));

// 첫 번째 직사각형의 영역을 1로 표시
for (let row = x1_A + offset; row < x2_A + offset; row++) {
    for (let col = y1_A + offset; col < y2_A + offset; col++) {
        arr[row][col] = 1;
    }
}

// 두 번째 직사각형의 영역을 덮기 작업
for (let row = x1_B + offset; row < x2_B + offset; row++) {
    for (let col = y1_B + offset; col < y2_B + offset; col++) {
        if (arr[row][col] === 1) {
            arr[row][col] = 0; // 직사각형 B에 의해 덮인 영역
        }
    }
}

// 남아있는 첫 번째 직사각형의 경계값을 찾기 위해 시작값(minX, minY는 최대값으로)과 끝 값(maxX와maxY는 최소값)으로 세팅
let minX = Number.MAX_SAFE_INTEGER;
let maxX = Number.MIN_SAFE_INTEGER;
let minY = Number.MAX_SAFE_INTEGER;
let maxY = Number.MIN_SAFE_INTEGER;

// 좌표 전체를 수색하면서 시작값과 각 해당 row, col의 현재 좌표를 비교해 더 작은 값을 시작값으로 세팅
// 마찬가지로 끝 값 또한 위의 로직대로 수행
for (let row = 0; row < coordinate; row++) {
    for (let col = 0; col < coordinate; col++) {
        if (arr[row][col] === 1) {
            minX = Math.min(minX, row);
            maxX = Math.max(maxX, row);
            minY = Math.min(minY, col);
            maxY = Math.max(maxY, col);
        }
    }
}

// 덮어야할 직사각형의 유효한 영역이 존재하는 경우 width와 height을 있는 그대로 곱해서 그 면적을 출력
if (maxX >= minX && maxY >= minY) {
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    const area = width * height;
    console.log(area);
} else {
    // 없는 경우 출력해야하는 값 자체(덮어야 할 곳 자체)가 없기 때문에 0을 출력
    console.log(0);
}