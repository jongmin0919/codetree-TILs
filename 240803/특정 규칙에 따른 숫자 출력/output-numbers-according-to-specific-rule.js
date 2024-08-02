const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// 숫자 패턴을 출력하는 함수
function printPattern(n) {
    let currentNumber = 1;  // 현재 숫자

    // 전체 줄의 수 만큼 반복
    for (let i = 0; i < n; i++) {
        let line = '';
        
        // 현재 줄의 앞 공백 추가
        line += ' '.repeat(i * 2);
        
        // 현재 줄에 출력할 숫자 추가
        for (let j = 0; j < n - i; j++) {
            line += currentNumber + ' ';
            currentNumber++;
            // 숫자가 9를 넘어서면 1로 돌아감
            if (currentNumber > 9) {
                currentNumber = 1;
            }
        }
        
        // 현재 줄 출력
        console.log(line.trimEnd());
    }
}

// 패턴 출력
printPattern(input);