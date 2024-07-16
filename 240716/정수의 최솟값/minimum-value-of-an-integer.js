const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function printMinimalNumber(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min) min = arr[i];
    }
    console.log(min);
}

printMinimalNumber(input);