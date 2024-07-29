const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const length = input.length;

for (let i = 0; i <= length; i++) {
    // i를 이용하여 문자열을 오른쪽으로 한 글자씩 밀기
    let temp = input.slice(length - i) + input.slice(0, length - i);

    // 기존의 input 값으로도 활용 가능
    // input = input[length - 1] + input.slice(0, length - 1);

    console.log(temp);
}