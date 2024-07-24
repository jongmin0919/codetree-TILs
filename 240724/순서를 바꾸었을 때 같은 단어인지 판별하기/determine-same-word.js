const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [first, second] = input;

// 두 문자열을 오름차순으로 정렬하고 같은지 다른지를 비교
function sameOrNot(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// 결과 출력
console.log(sameOrNot(first, second) ? 'Yes' : 'No');