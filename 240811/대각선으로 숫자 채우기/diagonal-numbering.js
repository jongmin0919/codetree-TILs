const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);

// 빈 배열 초기화
const result = Array.from({ length: n }, () => new Array(m).fill(0));

// 좌표값과 제일 큰 값, 이용할 증가 값과 마찬가지로 배열에 넣을 때마다 n * m 만큼 1씩 증가시킬 값을 선언
let size = 0;
let x = 0;
let y = 0;
let curSize = 0;
let state = 1;

while (size < n * m) {
    for (let i = 0; i <= curSize; i++) {
        x = i;
        y = curSize - i;

        if (x < n && y < m) {
            result[x][y] = state++;
            size++;
        }
        
    }
    curSize++;
}


result.forEach(row => {
  console.log(row.join(' '));
});