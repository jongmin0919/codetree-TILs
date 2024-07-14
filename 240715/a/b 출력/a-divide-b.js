// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

let result = "";
// 정수 부분을 먼저 출력합니다.
result += parseInt(a / b) + ".";


// a를 b로 나눈 나머지를 시작으로
// 소수점 자리를 하나씩 계산합니다.
a %= b;
for (let i = 0; i < 20; i++) {
    // 나머지에 10 곱한 값을 기준으로
    // b로 나누었을 떄의 몫을 구해줍니다.
    a *= 10;
    result += parseInt(a / b);

    // a를 b로 나눈 나머지를 게속 갱신해줍니다.
    a %= b;
}

// 출력
console.log(result);