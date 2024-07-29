const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
input = input.map(char => char.charCodeAt(0)).sort((a,b) => b-a);
console.log(`${input[0] + input[1]} ${input[0] - input[1]}`)