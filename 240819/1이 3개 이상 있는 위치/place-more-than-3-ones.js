const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const range = Number(input.shift());

let dx = [0, 1, 0, -1]; 
let dy = [1, 0, -1, 0];

// 격자 상태 초기화
let coordinates = input.map(line => line.split(" ").map(Number));

let result = 0;

// 이중 for문은 2차원 배열의 모든 배열에 직접적으로 접근할 수 있음
// 또한 초기 
for (let x = 0; x < range; x++) {
    for (let y = 0; y < range; y++) {
        let cnt = 0;

        // 현재 nx와 ny의 좌표에서 각 네 방향(dx와 dy의 0부터 3까지)을 반복하면서 해당 방향이
        // 격자의 범위 (각각 dx와 dy의 0부터 시작해 range 안에 있는경우)
        // 와 현재 좌표에서의 nx와 ny (현재 방향)의 값이 1인 경우를 계산해서
        // 현재 좌표에서 전방을 각각 돌았을 때 세 방향의 좌표가 1인 상태라면 cnt를 증가
        for (let direction = 0; direction < 4; direction++) {
            const nx = x + dx[direction];
            const ny = y + dy[direction];

            // 범위 내의 칸인지와 해당 방향의 좌표 값이 1인지를 찾는 조건
            if (nx >= 0 && ny >= 0 && nx < range && ny < range && coordinates[nx][ny] === 1) {
                cnt++;
            }
        }

        // 인접한 1의 개수가 3개 이상이면 result 증가
        if (cnt >= 3) {
            result++;
        }
    }
}

console.log(result);