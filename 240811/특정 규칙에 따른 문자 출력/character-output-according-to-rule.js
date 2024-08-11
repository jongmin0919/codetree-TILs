// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// 모양에 맞게 윗쪽 문자를 출력합니다.
for (let i = 0; i < n; i++) {
    str = "";

    for (let j = 0; j < n - i - 1; j++) {
        str += "  ";
    }

    for (let j = 0; j <= i; j++) {
        str += "@ ";
    }

    console.log(str);
}

// 모양에 맞게 아랫쪽 문자를 출력합니다.
for (let i = n - 2; i >= 0; i--) {
    let str = "";

    for (let j = 0; j <= i; j++) {
        str += "@ ";
    }
    
    console.log(str);
}