const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim().split("\n");
let letter = givenStr[0]
let length = parseInt(givenStr[1]);

let result = "";
for(let i = (letter.length) - 1  ; i > (letter.length - length) -1 ; i--){
    result += letter[i];
}

console.log(result);