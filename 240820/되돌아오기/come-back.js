const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력 처리
const N = parseInt(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// 방향 매핑
const directionMap = {
    'N': [0, 1],
    'S': [0, -1],
    'E': [1, 0],
    'W': [-1, 0]
};

// 현재 위치 및 시간
let x = 0, y = 0;
let time = 0;

// 이동 처리
for (const [direction, distance] of commands) {
    const [dx, dy] = directionMap[direction];
    for (let step = 0; step < parseInt(distance); step++) {
        x += dx;
        y += dy;
        time += 1;
        // 시작점으로 돌아온 경우
        if (x === 0 && y === 0) {
            console.log(time);
            return;
        }
    }
}

// 시작점으로 돌아오지 못한 경우
console.log(-1);