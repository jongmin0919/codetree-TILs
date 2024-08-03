// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// 2 * n + 1칸의 정사각형에서 i, j에 짝수가 들어가면 *을 출력합니다.
for (let i = 0; i < 2 * n + 1; i++) {
    str = "";
    for (let j = 0; j < 2 * n + 1; j++) {
        if (i % 2 == 0 || j % 2 == 0) str += "* ";
        else str += "  ";
    }
    console.log(str);
}