const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a,b] = [parseInt(input[0]), parseInt(input[1])]

function isPrime(num){
    let result = num;
    if (num <= 1) return 0; // 1 이하의 숫자는 소수가 아님
    if (num === 2) return num; // 2는 소수
    for(let i = 2 ; i < num ; i++){
        if(num%i === 0){
            result = 0;
            break;
        }
    }
    return result;
}

let result = 0;
for(let i = a ; i <= b ; i++){
    result += isPrime(i);
}

console.log(result)