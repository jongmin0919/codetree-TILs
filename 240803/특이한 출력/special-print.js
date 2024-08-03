const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let str = ""
for(let i = 1 ; i <= input ; i++){
    for(let j = 1 ; j <= input ; j++){
        if((i+j)%4 === 0)str += `(${i}, ${j})\n`;
        else str += `(${i}, ${j}) `;
    }
}

console.log(str.trim());