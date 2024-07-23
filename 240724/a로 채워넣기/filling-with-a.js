const fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString();

str = [...str];
str[str.length - 2] = str[1] = 'a';

console.log(str.join(""))