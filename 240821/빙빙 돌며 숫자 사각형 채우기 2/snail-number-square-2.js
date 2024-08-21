const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const n = parseInt(input[0]);
const m = parseInt(input[1]);

// 빈 배열 생성
const arr2D = Array.from({ length: n }, () => Array(m).fill(0));


// 가독성이 좋게 D => R => U => L 순으로 작성 (물론 순서는 아님)
const directions = {
    "D": [1, 0],  
    "R": [0, 1],  
    "U": [-1, 0], 
    "L": [0, -1]  
};

// 시작 위치와 방향 설정
let row = 0;
let col = 0;
// 시작 방향: 아래
let direction = "D"; 
let num = 1;

// 방향 순서 (인덱스 활용)
const order = ["D", "R", "U", "L"];

while (num <= n * m) {
    arr2D[row][col] = num++;
    
    // 다음 위치 계산
    const [dr, dc] = directions[direction];
    const curR = row + dr;
    const curC = col + dc;
    
    // 현재 좌표가 경계 바깥, 즉 벽에 부딪힌 상황이고 현재 좌표에 이미 값이 기록되어 있는 경우
    // 
    if (curR < 0 || curR >= n || curC < 0 || curC >= m || arr2D[curR][curC] !== 0) {
        
        // order에서 다음 방향
        // (order는 반시계 방향 순서대로 입력이 되어있으므로 direction의 인덱스 값에서 1을 더하여 방향 전환)
        // 전환된 뒤의 좌표를 new Dr, newDc에 할당하고 그 값을 현재 진행형 중인 row, col에 할당
        direction = order[(order.indexOf(direction) + 1) % 4]; // 다음 방향으로 변경
        const [newDr, newDc] = directions[direction];
        row += newDr;
        col += newDc;
    } else {
        // 경계션 안이고 현재 위치가 0이라면 row와 col을 현재 방향으로 한 칸 이동 
        row = curR;
        col = curC;
    }
}

// 결과 출력
arr2D.forEach(row => {
    console.log(row.join(' '));
});