const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 입력의 첫 줄에서 범위의 개수를 읽어옴
const length = Number(input.shift());

// 최소 범위와 최대 범위를 저장할 변수
let minRange = 0;
let maxRange = 0;
const ranges = [];

// 각 범위를 처리하여 최소 및 최대 범위를 결정
for (let i = 0; i < length; i++) {
    const [startPoint, endPoint] = input[i].split(" ").map(Number);
    ranges.push({ startPoint, endPoint });
    if (startPoint < minRange) {
        minRange = startPoint;
    }
    if (endPoint > maxRange) {
        maxRange = endPoint;
    }
}

// 음수 인덱스를 처리하기 위해 배열의 오프셋을 계산
const offset = -minRange;

// 최소 범위에서 최대 범위까지의 크기를 가진 배열을 생성 (0의 범위를 포함하기 위해 +1을 해줌)
const arr = Array.from({ length: maxRange - minRange + 1 }, () => 0);

// 각 범위에 따라 배열의 값을 증가시킴
for (const { startPoint, endPoint } of ranges) {
    for (let i = startPoint + offset; i < endPoint + offset; i++) {
        arr[i]++;
    }
}

// 배열에서 최대 값을 찾아 출력
console.log(Math.max(...arr));