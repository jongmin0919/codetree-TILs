const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let arr = [...input];
let cnt = 0;

arr.forEach(item => cnt += item.length);

console.log(cnt);