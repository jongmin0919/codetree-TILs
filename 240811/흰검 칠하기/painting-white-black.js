const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [lines, orderArr] = [input.shift(), input.map(arr => arr.split(" "))];

let min = 0;
let max = 0;
let num = 0;

// Min과 Max를 정확히 계산하여 배열의 크기를 맞춤
orderArr.forEach(order => {
    let temp = 0;
    if (order[1] === 'R') temp = parseInt(order[0]) - 1;
    else temp = -(parseInt(order[0])) - 1;
    
    num += temp;
    if (num < min) min = num;
    if (num > max) max = num;
});

// 범위 설정: 음수 값을 보정하는 offset 사용
const offset = -min;
const size = max - min + 1;

const accumulator = Array(size).fill(0);
const blackArr = Array(size).fill(0);
const whiteArr = Array(size).fill(0);
const colorArr = Array(size).fill('');

// 초기 position을 offset으로 설정하여 항상 양수 인덱스를 사용
let position = offset;

for (let order of orderArr) {
    const steps = parseInt(order[0]);
    if (order[1] === 'R') {
        for (let i = 0; i < steps; i++) {
            accumulator[position]++;
            blackArr[position]++;
            colorArr[position] = 'B';

            if (whiteArr[position] >= 2 && blackArr[position] >= 2) colorArr[position] = 'G';
            position++;

            if (position < 0) break;

        }
        position--; // R 명령 후 position 조정
    }

    if (order[1] === 'L') {
        for (let i = 0; i < steps; i++) {
            accumulator[position]++;
            whiteArr[position]++;
            colorArr[position] = 'W';

            if (whiteArr[position] >= 2 && blackArr[position] >= 2) colorArr[position] = 'G';
            position--;

            if (position < 0) break;
        }
        position++; // L 명령 후 position 조정
    }
}

// 결과 계산
let result = [0, 0, 0];

for (let i = 0; i < colorArr.length; i++) {
    if (colorArr[i] === 'W') result[0]++;
    if (colorArr[i] === 'B') result[1]++;
    if (colorArr[i] === 'G') result[2]++;
}

console.log(result.join(' ').trim());