const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [A, B] = [input[0], input[1]];

if(A + B === B + A) console.log(true)
else console.log(false);