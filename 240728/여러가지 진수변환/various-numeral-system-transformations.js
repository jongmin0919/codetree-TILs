const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
const [num, way] = input.map(Number); // 문자열을 숫자로 변환

function binaryConverter(n, base) {
    let arr = [];
    let temp = n;

    // 변환 과정
    while (temp > 0) {
        arr.push(temp % base); // 현재 자리의 값 저장
        temp = Math.floor(temp / base); // 다음 자리로 이동
    }

    // 결과 배열을 역순으로 조합하여 문자열로 변환
    let result = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
    }

    console.log(result);
}

binaryConverter(num, way);