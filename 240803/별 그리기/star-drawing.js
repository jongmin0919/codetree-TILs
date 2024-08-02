const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// 다이아몬드 모양을 출력하는 함수
function printDiamond(n) {
    const size = 2 * n - 1;  // 격자의 크기
    let diamond = '';

    // 위쪽 삼각형 및 중간 줄
    for (let i = 0; i < n; i++) {
        let line = '';

        // 앞 공백 추가
        line += ' '.repeat(n - i - 1);

        // 별표 추가
        line += '*'.repeat(2 * i + 1);

        diamond += line + '\n';
    }

    // 아래쪽 삼각형
    for (let i = n - 2; i >= 0; i--) {
        let line = '';

        // 앞 공백 추가
        line += ' '.repeat(n - i - 1);

        // 별표 추가
        line += '*'.repeat(2 * i + 1);

        diamond += line + '\n';
    }

    // 결과 출력
    console.log(diamond.trimEnd());
}

// 패턴 출력
printDiamond(input);