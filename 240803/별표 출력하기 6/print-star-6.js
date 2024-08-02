const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// 별표 패턴을 출력하는 함수
function printStarPattern(n) {
    const size = 2 * n - 1;  // 전체 줄의 수

    // 위쪽 삼각형과 중간줄
    for (let i = 0; i < n; i++) {
        let line = '';

        // 앞 공백 추가
        line += ' '.repeat(i * 2);

        // 별표 추가
        const starsCount = size - i * 2;
        line += '* '.repeat(starsCount).trim();

        console.log(line);
    }

    // 아래쪽 삼각형
    for (let i = n - 2; i >= 0; i--) {
        let line = '';

        // 앞 공백 추가
        line += ' '.repeat(i * 2);

        // 별표 추가
        const starsCount = size - i * 2;
        line += '* '.repeat(starsCount).trim();

        console.log(line);
    }
}

// 패턴 출력
printStarPattern(input);