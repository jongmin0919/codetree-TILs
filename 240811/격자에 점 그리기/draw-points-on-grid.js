const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n] = input.shift().split(" ").map(Number);

// 빈 배열 초기화
let arr = Array.from({ length: n }, () => Array(n).fill(0));

let count = 1;

input.forEach(line => {
    let [r, c] = line.split(" ").map(Number);
    arr[r - 1][c - 1] = count++;
});

// 결과를 출력합니다.
arr.forEach(row => {
    console.log(row.join(" "));
});