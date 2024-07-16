const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let arr = [...input]

for(let i = arr.length - 1; i >= 0 ; i-- ){
    console.log(arr[i])
}