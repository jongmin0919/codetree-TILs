const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

// 인덱스를 활용해 각 행마다 한 개씩 늘어가면서 0으로 채우기
let arr2d = Array.from({ length: input }, (_, i) => Array(i + 1).fill(0));


for (let i = 0; i < input; i++) {
    for (let j = 0; j <= i; j++) {
            // 각 열과 행의 첫 지점은 1이 되어야 하므로 아래와 같이 조건을 줌
        if (j === 0 || j === i) {
            arr2d[i][j] = 1
        } else {
            // 문제 설명처럼 조합하여 저장
            arr2d[i][j] = arr2d[i - 1][j - 1] + arr2d[i - 1][j]; 
        }
    }
}

// 출력문 ()
function printArr(arr) {
    for (let row of arr) {
        let str = "";
        for (let elem of row) {
            str += elem + " ";
        }
        console.log(str.trim());
    }
}

printArr(arr2d)