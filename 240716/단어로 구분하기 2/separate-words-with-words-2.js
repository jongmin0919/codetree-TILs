const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let arr  = [...input]

for(let i = 0; i < arr.length ; i++){
    if(i%2 === 0) console.log(arr[i])
}