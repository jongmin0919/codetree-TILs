const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [lines, orderArr] = [input.shift(), input.map(arr => arr.split(" "))];

let min = 0;
let max = 0;
let num = 0;

// 최소값 최대값 찾고 배열의 사이즈를 맞추기
orderArr.forEach(order => {
    let temp = 0;
    if (order[1] === 'R') temp = parseInt(order[0]);
    else temp = -(parseInt(order[0]));
    
    num += temp;
    if (num < min) min = num;
    if (num > max) max = num;
});

const size = max - min + 1;

let tile = Array(size).fill("");

let position = Math.abs(min);

for (let order of orderArr) {
    
    if(parseInt(order[0]) < 1 && parseInt(order[0]) > 100) continue;
    
    const steps = parseInt(order[0]);

    if (order[1] === 'R') {
        for (let i = 0; i < steps; i++) {
            tile[position] = 0;
            position++;

            if (position < 0) break;

        }
        position--; 
    }

    if (order[1] === 'L') {
        for (let i = 0; i < steps; i++) {
            tile[position] = 1;
            position--;

            if (position < 0) break;
        }
        position++; 
    }
}

let [white, black] = [0, 0];

tile.filter(item => item !== "").forEach(item => {
    if(item === 1) white ++
    else black++;
});



console.log(`${white} ${black}`)