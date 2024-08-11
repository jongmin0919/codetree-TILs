const fs = require("fs");
const n = parseInt(fs.readFileSync(0).toString().trim(), 10);

// 결과를 저장할 배열
const result = Array.from({ length: n }, () => Array(n).fill(' '));

// 패턴 생성
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1 || j < i) {
            result[i][j] = '*';
        }
    }
}

// 결과를 출력합니다.
result.forEach(row => console.log(row.join(' ')));