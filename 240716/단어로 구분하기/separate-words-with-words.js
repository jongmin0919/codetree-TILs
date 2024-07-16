const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let arr = [...input]

arr.forEach(item => console.log(item))