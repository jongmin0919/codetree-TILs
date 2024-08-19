const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, t] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ');
r = Number(r) - 1; // 0-indexed
c = Number(c) - 1; // 0-indexed

// 방향을 배열로 설정 (0: U, 1: D, 2: L, 3: R)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 초기 방향 (d)의 구슬 좌표를 dx와 dy의 값을 이용해 설정
let direction = (d === 'U') ? 0 : (d === 'D') ? 1 : (d === 'L') ? 2 : 3;

for (let i = 0; i < t; i++) {
    //좌표 이동
    let nextR = r + dx[direction];
    let nextC = c + dy[direction];

    // 벽에 부딪힐 때, 즉 경계 밖으로 좌표가 넘어갈 때 해당 방향을 반전 시키기
    if (nextR < 0 || nextR >= n || nextC < 0 || nextC >= n) {
        // 방향 반전
        direction = (direction === 0) ? 1 : (direction === 1) ? 0 : 
                    (direction === 2) ? 3 : 2;
    } else {
        // 이동
        r = nextR;
        c = nextC;
    }
}

// 코드 내에서는 처리는 인덱스인 0부터 시작하나, 사용자에게 직관적으로 보여야 하기 때문에 방향에 각각 +1를 추가
console.log(r + 1, c + 1);