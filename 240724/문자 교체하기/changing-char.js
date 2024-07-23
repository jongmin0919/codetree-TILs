const fs = require('fs');
const strArr = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

let str = strArr[0].slice(0,2) + strArr[1].slice(2);
console.log(str);