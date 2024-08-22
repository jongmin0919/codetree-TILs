const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

// 빈 배열 생성
const arr2D = Array.from({ length: n }, () => Array(n).fill(0));

// 방향 설정 (오른쪽, 위, 왼쪽, 아래)
const directions = {
    "R": [0, 1],  // 오른쪽
    "U": [-1, 0], // 위
    "L": [0, -1], // 왼쪽
    "D": [1, 0]   // 아래
};

// 방향 순서
const order = ["R", "U", "L", "D"];

// 가운데부터 시작을 해야하기 때문에 row와 col을 n/2 (이등분) 한 값으로 넣음
//만약 5가 입력되면 5/2 = 2이고, 인덱스는 0부터 시작하므오 0,1,2 번째 x와 0,1,2번쨰 y 좌표
// 즉 가운데에서 시작할 수 있음
let row = Math.floor(n / 2); 
let col = Math.floor(n / 2); 
// 초기 방향 인덱스는 오른쪽
let directionIndex = 0;      

// 스텝 크기와 단계 수
let steps = 1;
let num = 1; // 현재 숫자

// n * n만큼 for문 반복
for (let i = 0; i < n * n; ) {
    // 현재 방향으로 이동할 거리만큼 이동
    for (let step = 0; step < steps; step++) {
        
        arr2D[row][col] = num++;
        
        // 현재 방향으로 이동
        const [dr, dc] = directions[order[directionIndex]];
        row += dr;
        col += dc;
        i++;
    }
    
    // 방향 전환
    directionIndex = (directionIndex + 1) % 4;
    
    // 방향 전환 후 이동 거리 조정 (짝수 방향 전환 후에만 증가)
    // 얘를들어 오른쪽으로 한 칸, 위쪽으로 한 칸 갔다면 다음 전환 방향은 왼쪽일 때
    // directionIndex는 2 이므로 이때 steps를 증가하여 왼쪽으로 두 칸, 아래로 두 칸을 가야함
    // 그 다음 마찬가지로 directionIndex는 0(오른쪽) 이므로 0%2 === 0 가 성립됨
    // 이때 마찬가지로 steps를 하나 더 늘려 그 이후의 방향 전환 때마다 한 칸 더 늘려 가면됨
    // 방향 전환을 잘 보면 방향 전환이 두 번 이루어질 때 가는 횟수(steps)가 1씩 증가함을 발견할 수 있음
    // right(1), up(1), left(2), down(2), right(3), up(3), left(4), down(4) 이런 법칙을 응요한 것임
    if (directionIndex % 2 === 0) {
        steps++;
    }
}

// 결과 출력
arr2D.forEach(row => {
    console.log(row.join(' '));
});