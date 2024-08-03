const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function printCheckDiamond(n) {
    const size = 2 * n - 1; // 전체 격자 크기

    let result = '';

    // 위쪽 다이아몬드 부분
    for (let i = 0; i < n; i++) {
        let line = '';

        // 왼쪽 공백 추가
        for (let j = 0; j < n - i - 1; j++) {
            line += ' ';
        }

        // 별 추가
        for (let k = 0; k <= i; k++) {
            line += '* ';
        }

        result += line.trimEnd() + '\n'; // 각 줄 끝의 불필요한 공백 제거
    }

    // 아래쪽 다이아몬드 부분
    for (let i = n - 2; i >= 0; i--) {
        let line = '';

        // 왼쪽 공백 추가
        for (let j = 0; j < n - i - 1; j++) {
            line += ' ';
        }

        // 별 추가
        for (let k = 0; k <= i; k++) {
            line += '* ';
        }

        result += line.trimEnd() + '\n'; // 각 줄 끝의 불필요한 공백 제거
    }

    console.log(result);
}

printCheckDiamond(input);