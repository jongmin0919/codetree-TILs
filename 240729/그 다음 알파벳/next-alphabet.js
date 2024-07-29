const fs = require('fs');
let input = String.fromCharCode((fs.readFileSync('/dev/stdin').toString().trim().charCodeAt(0) + 1));

console.log(`${input}`);