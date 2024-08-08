const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());


let str = "";
for(let i = 2 ; i <= input ; i++){
    let cnt = 0;
    for(let j = 1 ; j <= i ; j++){
        if(i%j === 0) cnt++;
    }
    if(cnt === 2) str += i + " ";
}
console.log(str.trim());