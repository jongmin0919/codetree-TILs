const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");


let cnt = 0;

// 입력을 배열로 변환 후 foreach를 이용해 각 문자열의 길이를 cnt에 누적 후 출력
let arr = [...input];
arr.forEach(item => cnt += item.length);

console.log(cnt);