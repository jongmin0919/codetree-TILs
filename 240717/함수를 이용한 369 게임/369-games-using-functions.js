const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a, b] = [parseInt(input[0]), parseInt(input[1])]

function isFulfilledNumber(num){
    if(num%3 === 0 || num.toString().includes('3') || num.toString().includes('6') || num.toString().includes('9')) return 1
    else return 0;
    // includes 대신에 수학적인 방식으로 접근 가능
/*
    // num이 0이 될때까지 while문을 돌림
    while (num > 0) {
        // 각 1의 자리수를 구함
        let digit = num % 10;
        // 구한 1의 자리수에 3,6,9 중 하나가 포함되어 있으면 1을 반환
        if (digit === 3 || digit === 6 || digit === 9) {
            return 1;
        }
        // 조건에 걸리지 않으면 num을 10으로 나눠 한자리수를 내린 후 Math.floor로 소수점을 없애준 뒤 다시 while문 반복
        num = Math.floor(num / 10);
    }
*/
}

let cnt = 0;
for(let i = a ; i <= b ; i++){
    cnt += isFulfilledNumber(i);
}

console.log(cnt);