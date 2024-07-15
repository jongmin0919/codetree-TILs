const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let letterA = input[0];
let letterB = input[1];

console.log(letterA.length > letterB.length ? `${letterA} ${letterA.length}` 
          : letterA.length < letterB.length ? `${letterB} ${letterB.length}` 
          : `same`)