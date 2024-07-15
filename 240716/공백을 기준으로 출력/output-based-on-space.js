const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let words = "";

for(let i = 0 ; i < input.length ; i++){
    for(let j = 0; j < input[i].length ; j++){
        if(input[i][j] !== " ") words += input[i][j];
    }
}

console.log(words);