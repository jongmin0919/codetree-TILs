const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const runner = input.shift().split(" ").map(Number);
const aMoving = input.splice(0, runner[0]);
const bMoving = input.splice(0);

// A와 B의 위치 및 시간 정보를 초기화
let aPosition = 0, bPosition = 0;
let aSecond = 0, bSecond = 0;
let aOrder = null, bOrder = null;
let result = 0;

// 이동 명령을 배열로 변환
const aCommands = aMoving.map(line => line.split(" "));
const bCommands = bMoving.map(line => line.split(" "));

let i = 0, j = 0;

while (i < aCommands.length || j < bCommands.length) {
    // 현재 시간과 방향 결정
    if (i < aCommands.length) {
        [aSecond, aOrder] = [parseInt(aCommands[i][0]), aCommands[i][1]];
    }
    if (j < bCommands.length) {
        [bSecond, bOrder] = [parseInt(bCommands[j][0]), bCommands[j][1]];
    }

    // 이동 시간 결정
    let moveTime = Math.min(aSecond, bSecond);
    if (aSecond === 0) moveTime = bSecond;
    if (bSecond === 0) moveTime = aSecond;

    // 주자 A와 B의 위치 갱신
    if (aOrder) {
        if (aOrder === "R") aPosition += moveTime;
        if (aOrder === "L") aPosition -= moveTime;
        aSecond -= moveTime;
    }
    if (bOrder) {
        if (bOrder === "R") bPosition += moveTime;
        if (bOrder === "L") bPosition -= moveTime;
        bSecond -= moveTime;
    }

    // 교차 점 확인
    if (aPosition === bPosition) {
        result++;
    }

    // 명령 갱신
    if (aSecond === 0) i++;
    if (bSecond === 0) j++;
}

console.log(result);