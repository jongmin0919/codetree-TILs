const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력 처리
const n = parseInt(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// 동서남북 방향 매핑
const directionMap = {
    'N': [0, 1],   
    'S': [0, -1],  
    'E': [1, 0],   
    'W': [-1, 0]   
};

// 현재 위치 및 시간
let x = 0, y = 0;
let time = 0;

// 각 명령을 처리
for (let [direction, distance] of commands) {
    // 현재 좌표의 방향으로 dx와 dy를 설정
    const [dx, dy] = directionMap[direction];
    distance = parseInt(distance);
    
    // 거리만큼 반복문을 돌면서 x와 y를 방향대로 이동
    for (let step = 0; step < distance; step++) {
        x += dx;
        y += dy;
        time += 1;

        // 시작점으로 돌아온 경우 누적된 시간을 출력하고 해당 함수 종료
        if (x === 0 && y === 0) {
            console.log(time);
            return;
        }
    }
}

// 시작점으로 돌아오지 못한 -1를 출력
console.log(-1);