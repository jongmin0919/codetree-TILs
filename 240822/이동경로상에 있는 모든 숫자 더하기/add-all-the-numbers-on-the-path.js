const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력 파싱
const [N, T] = input[0].split(' ').map(Number);
const cmd = input[1];
const grid = input.slice(2).map(line => line.split(' ').map(Number));

// 방향 설정: 북쪽, 동쪽, 남쪽, 서쪽
const directions = {
    'N': [-1, 0], 
    'E': [0, 1],  
    'S': [1, 0],  
    'W': [0, -1]  
};

// 방향 인덱스: 시계방향
const directionOrder = ['N', 'E', 'S', 'W'];

// 시작 위치(가운데) 설정
let row = Math.floor(N / 2);
let col = Math.floor(N / 2);
// 시작 방향은 오른쪽으로 시작
let directionIndex = 0; 

let sum = grid[row][col]; // 시작 위치의 숫자도 합산

// 명령 처리
for (const order of cmd) {
    // L이면 90도 왼쪽 회전 공식
    if (order === 'L') {
        directionIndex = (directionIndex + 3) % 4;
    //  R이면 90도 오른쪽 회전 공식
    } else if (order === 'R') {
        directionIndex = (directionIndex + 1) % 4;
    // F면 전진
    } else if (order === 'F') {
        const [dr, dc] = directions[directionOrder[directionIndex]];
        const newRow = row + dr;
        const newCol = col + dc;

        
        if (newRow >= 0 && newRow < N && newCol >= 0 && newCol < N) {
            row = newRow;
            col = newCol;
            // 현재 좌표의 값을 누적 증가
            sum += grid[row][col];
        }
    }
}

// 결과 출력
console.log(sum);