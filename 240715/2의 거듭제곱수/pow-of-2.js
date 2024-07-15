const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let division = parseInt(input);
let count = 0;
while(division > 1){
    division = division/2;
    count++;
}
console.log(count);