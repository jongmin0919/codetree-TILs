const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, arr] = input;
arr = arr.split(" ").map(Number);

let result = [];
// 지금까지 센 숫자 배열
let current = [];

arr.forEach((item, i) => {
    current.push(item);
    current.sort((a, b) => a - b);
    
    // arr의 현재 숫자가 홀수인 경우 지금까지 세었던 current 배열의 개수 / 2를 한 후 floor로 버려야 인덱스를 고려한 중앙값을 찾을 수 있음.
    if ((i + 1) % 2 === 1) { 
        let mid = Math.floor(current.length / 2);
        result.push(current[mid]);
    }
});

console.log(result.join(' '));