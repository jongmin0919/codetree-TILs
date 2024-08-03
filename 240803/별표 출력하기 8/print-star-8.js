const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function printPattern(n) {
    let result = '';
    let currentCount = 1; // 현재 줄의 별표 개수

    while (currentCount <= n) {
        if (currentCount % 2 !== 0) {
            // 홀수 번째 줄에는 별표 하나만 출력
            result += '*\n';
        } else {
            // 짝수 번째 줄에는 별표 currentCount 개를 출력
            result += '* '.repeat(currentCount).trim() + '\n';
        }

        currentCount++;
    }

    console.log(result);
}

printPattern(input);