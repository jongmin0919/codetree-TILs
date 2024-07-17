const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a,b] = [parseInt(input[0]), parseInt(input[1])]

function isPrime(num){
    let result = num;
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