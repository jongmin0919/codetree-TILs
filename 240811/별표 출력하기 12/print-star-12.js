const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// 결과를 저장할 배열
const result = Array.from({ length: input }, () => Array(input).fill(' '));

// 패턴 생성
for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
        // 첫 번째 줄과 대각선 아래 위치에 별(`*`)을 배치합니다.
        if (i === 0 || (j % 2 !== 0 && j >= i)) {
            result[i][j] = '*';
        }
    }
}

// 결과를 출력합니다.
result.forEach(row => console.log(row.join(' ')));