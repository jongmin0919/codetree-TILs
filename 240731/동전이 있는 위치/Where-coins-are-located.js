const fs = require('fs');

// 입력을 읽어옵니다. '/dev/stdin'을 사용하여 표준 입력에서 데이터를 읽습니다.
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에는 격자의 크기 n과 동전의 개수 m이 주어집니다.
const [n, m] = input[0].split(' ').map(Number);

// n * n 크기의 격자를 0으로 초기화합니다.
let grid = Array.from({ length: n }, () => Array(n).fill(0));

// 동전의 위치를 읽어와서 격자에 표시합니다.
for (let i = 1; i <= m; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    grid[x - 1][y - 1] = 1; // 동전이 있는 위치를 1로 표시합니다. (입력은 1부터 시작, 배열은 0부터 시작하므로 -1)
}

// 격자의 상태를 출력합니다.
for (let i = 0; i < n; i++) {
    console.log(grid[i].join(' ')); // 배열의 각 행을 공백으로 구분된 문자열로 출력합니다.
}