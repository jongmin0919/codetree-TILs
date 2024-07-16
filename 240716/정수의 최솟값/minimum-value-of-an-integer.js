const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");



function printMinimalNumber(str){
    let arr = [...str];
    let min = arr[0];
    for(let i = 0; i < str.length ; i++){
        if(arr[i] < min) min = arr[i];
    }
    console.log(min);
}

printMinimalNumber(input)