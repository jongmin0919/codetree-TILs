const fs = require('fs');

// 입력을 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input, 10);

// 입력값이 유효한지 확인
if (isNaN(n) || n < 1) {
    console.error('유효하지 않은 입력입니다.');
    process.exit(1);
}

// 결과를 저장할 변수
let result = '';

// 위쪽 절반 및 가운데 행 생성
for (let i = n; i > 0; i--) {
    result += '* '.repeat(i).trimEnd() + '\n';
}

// 아래쪽 절반 생성
for (let i = 2; i <= n; i++) {
    result += '* '.repeat(i).trimEnd() + '\n';
}

// 결과 출력
console.log(result);