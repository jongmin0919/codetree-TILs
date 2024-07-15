const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
console.log(input[0].length + input[1].length);