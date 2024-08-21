const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const [n, orders] = input.shift().split(' ').map(Number);
const arr2D = Array.from({ length: n }, () => Array(n).fill(0));
const lines = input.map(line => line.split(' ').map(Number));

// 방향 매핑 객체
const directions = {
    "N": [-1, 0],  
    "S": [1, 0],   
    "E": [0, -1],  
    "W": [0, 1]    
};

// 결과를 저장할 배열과 인접한 칸이 1인지를 카운팅 할 cnt 변수 초기화
const result = [];
const cnt = 0;

// 각 칸을 색칠하고 '편안한 상태'인지 확인
for (const [r, c] of lines) {
    // 인덱스는 0부터 시작하므로 -1를 적용한 현재 좌표에 1을 칠해주기
    arr2D[r - 1][c - 1] = 1;
    
    // 현재 좌표
    const row = r - 1;
    const col = c - 1;
    
    // 좌우 네 방향을 살펴봐야 하기 때문에 매번 lines의 라인들 마다 네 방향을 살펴보기 위해
    // Object.keys로 키 배열들(["N", "S", "E", "W"])에 대한 forEach로 조회하는 작업들을 진행
    Object.keys(directions).forEach(key => {
        // 현재 directions (["N", "S", "E", "W"]) 의 key (네 값중 순차적인 하나의 키 네이밍)의 값을 dr과 dc에 적용
        const [dr, dc] = directions[key];
        // 현재 좌표(row, col)에서 상하좌우를 전진한 뒤 해당 좌표를 살펴보는 값 
        const curR = row + dr;
        const curC = col + dc;
        // 현재 좌표가 경계값 안에 있고, 그 좌표에 1이 칠해져 있는 경우 cnt 증가
        if (curR >= 0 && curR < n && curC >= 0 && curC < n && arr2D[curR][curC] === 1) cnt++;
        
    });
    
    // cnt가 3 이상이면 1로 기억하고 아니면 0을 기록
    if (cnt >= 3) {
        result.push(1);
        cnt = 0;
    } else {
        result.push(0);
        cnt = 0;
    }
}

// 결과 출력
console.log(result.join('\n'));