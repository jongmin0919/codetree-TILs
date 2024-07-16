const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

function evenAndMultipleFive(number){
    let sum = 0;
    let num = number.toString();
    for(let i = 0; i < num.length ; i++){
        sum += parseInt(num[i]);
    }  

    if(sum%5 === 0 && number%2 === 0) console.log('Yes')
    else console.log('No')
}

evenAndMultipleFive(input)