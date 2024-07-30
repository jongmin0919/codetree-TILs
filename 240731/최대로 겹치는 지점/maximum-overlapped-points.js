const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 선분의 개수
const length = Number(input.shift());

// 최소 범위와 최대 범위를 저장할 변수 (초기값 설정)
let minRange = Infinity;
let maxRange = -Infinity;

// 각 선분의 시작점과 끝점을 저장
const lines = [];

for (let i = 0; i < length; i++) {
    const [startPoint, endPoint] = input[i].split(" ").map(Number);
    lines.push([startPoint, endPoint]);
    if (minRange > startPoint) minRange = startPoint;
    if (maxRange < endPoint) maxRange = endPoint;
}

// 최소값에서 최대값까지의 크기를 오프셋과 선분 0을 고려해 배열 생성 
const overlapArray = Array(maxRange - minRange + 1).fill(0);

// 각 선분의 시작점부터 끝점까지 배열의 값을 증가
for (const [startPoint, endPoint] of lines) {
    for (let i = startPoint; i <= endPoint; i++) {
        // 해당 구간의 오프셋을 고려해 -minRange를 먼저 계산한 후 그 구간을 증가
        overlapArray[i - minRange]++;
    }
}

// 결과 출력
console.log(overlapArray.sort((a,b) => b-a)[0]);