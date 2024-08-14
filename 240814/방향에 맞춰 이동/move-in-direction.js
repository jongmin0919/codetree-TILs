const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const length = Number(input.shift());

// dx, dy 배열을 시계방향으로 설정: N, E, S, W
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

let position = [0, 0]; // 초기 위치

// 방향을 인덱스로 매핑 (오른쪽, 아래, 왼쪽, 위 방향으로 N는 0, E는 1, S는 2, W는 3)
for(let i = 0; i < length; i++){
    const [direction, steps] = input[i].split(" ");
    let index;

    if(direction === "N") index = 0;
    else if(direction === "E") index = 1;
    else if(direction === "S") index = 2;
    else if(direction === "W") index = 3;

    // 
    position[0] += dx[index] * Number(steps);
    position[1] += dy[index] * Number(steps);
}

console.log(position.join(" "));