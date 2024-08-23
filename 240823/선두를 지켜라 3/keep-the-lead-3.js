const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 첫 번째 줄에서 N과 M을 추출
const [N, M] = input[0].split(" ").map(Number);

// A와 B의 이동 정보를 읽어오기
const A = input.slice(1, N + 1).map(line => line.split(" ").map(Number));
const B = input.slice(N + 1).map(line => line.split(" ").map(Number));

// 시간을 담기 위한 배열
const events = [];

// A의 이동 정보에서 각 시간별 위치 저장
let currentTime = 0;
let currentPosition = 0;
for (let [v, t] of A) {
    for (let i = 0; i < t; i++) {
        currentTime++;
        currentPosition += v;
        events.push({ time: currentTime, position: currentPosition, type: 'A' });
    }
}

// B의 이동 정보에서 각 시간별 위치 저장
currentTime = 0;
currentPosition = 0;
for (let [v, t] of B) {
    for (let i = 0; i < t; i++) {
        currentTime++;
        currentPosition += v;
        events.push({ time: currentTime, position: currentPosition, type: 'B' });
    }
}

// 시간을 기준으로 정렬
events.sort((a, b) => a.time - b.time);

// 명예의 전당 그룹 체크
let lastLeaders = new Set();
let changes = 0;

for (let i = 0; i < events.length; i++) {
    const current = events[i];
    let leaders = new Set();
    let maxPosition = -Infinity;
    
    // 같은 시간에 여러 개의 이벤트가 있을 수 있으므로 이들을 모두 처리
    while (i < events.length && events[i].time === current.time) {
        if (events[i].position > maxPosition) {
            maxPosition = events[i].position;
            leaders.clear();
        }
        if (events[i].position === maxPosition) {
            leaders.add(events[i].type);
        }
        i++;
    }
    i--;

    // 그룹이 변경되었는지 확인
    if (!isEqualSets(lastLeaders, leaders)) {
        changes++;
        lastLeaders = leaders;
    }
}

// 집합 비교 함수
function isEqualSets(set1, set2) {
    if (set1.size !== set2.size) return false;
    for (let item of set1) {
        if (!set2.has(item)) return false;
    }
    return true;
}

console.log(changes);