const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

for(let i = 1 ; i <= input ; i++){
    for(let j = 1 ; j <= input ; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}