const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let result = "";
for(let i = input.length - 1;  i >= 0 ; i--){
    if(i%2 !== 0) result += input[i];
}

console.log(result);