const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [length, arr] = [input[0], input.slice(1)]

console.log(arr.join(""))