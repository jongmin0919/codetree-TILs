const fs = require('fs');
let input = String.fromCharCode((fs.readFileSync('/dev/stdin').toString().trim().charCodeAt(0) + 1));
if(input === "{") input = 'a'
console.log(`${input}`);