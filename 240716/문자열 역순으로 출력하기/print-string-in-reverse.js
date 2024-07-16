const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

// 역순 출력 (배열 길이 -1 부터 1씩 감소)
for(let i = input.length-1 ; i >= 0 ; i--){
    console.log(input[i])
}