const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function printPattern(n) {
    let result = '';

    // 위쪽 절반
    for (let i = 0; i < n; i++) {
        let stars;
        if (i % 2 !== 0) {  // 홀수 번째 줄
            stars = n - (i - 1) / 2;
        } else {  // 짝수 번째 줄
            stars = 1 + (i / 2);
        }
        result += '* '.repeat(stars).trim() + '\n';
    }

    // 아래쪽 절반
    for (let i = n - 1; i >= 0; i--) {
        let stars;
        if (i % 2 !== 0) {  // 홀수 번째 줄
            stars = n - (i - 1) / 2;
        } else {  // 짝수 번째 줄
            stars = 1 + (i / 2);
        }
        result += '* '.repeat(stars).trim() + '\n';
    }
    
    console.log(result);
}

printPattern(input);