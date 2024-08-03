const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function printPattern(n) {
    let result = '';

    // 위쪽 절반
    for (let i = 1; i <= n; i++) {
        // 홀수 줄: 별의 개수는 n - (i - 1) // 2
        if (i % 2 !== 0) {
            result += '* '.repeat(n - (i - 1) / 2).trim() + '\n';
        } else {
            // 짝수 줄: 별의 개수는 (i / 2) + 1
            result += '* '.repeat(i / 2).trim() + '\n';
        }
    }

    // 아래쪽 절반
    for (let i = n; i >= 0; i--) {
        // 홀수 줄: 별의 개수는 n - (i - 1) // 2
        if (i % 2 !== 0) {
            result += '* '.repeat(n - (i - 1) / 2).trim() + '\n';
        } else {
            // 짝수 줄: 별의 개수는 (i / 2) + 1
            result += '* '.repeat(i / 2).trim() + '\n';
        }
    }

    console.log(result);
}

printPattern(input);