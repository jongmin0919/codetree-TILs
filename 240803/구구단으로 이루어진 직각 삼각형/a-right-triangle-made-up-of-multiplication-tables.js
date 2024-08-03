const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let range = input
let str = ""
for(let i = 1 ; i <= range ; i++){
    for(let j = 1 ; j <= input ; j++){
        if(j === input)str += `${i} * ${j} = ${i*j}\n`;
        else str += `${i} * ${j} = ${i*j} / `;
    }
    input--;
}

console.log(str.trim());