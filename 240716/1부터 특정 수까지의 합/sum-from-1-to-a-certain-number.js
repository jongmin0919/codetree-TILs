const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");



function printSpecialNumber(number){
    let sum = 0;
    for(let i = 1; i <= number ; i++){
        sum += i;
    }
    console.log(Math.floor(sum/10))
}

printSpecialNumber(input)