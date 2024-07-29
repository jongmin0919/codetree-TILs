const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

let result = (parseInt(input[0]) + parseInt(input[1])).toString();

let cnt = 0;
for(let i = 0 ; i< result.length ; i++){
    if(result[i] === '1')cnt++
}

console.log(cnt)