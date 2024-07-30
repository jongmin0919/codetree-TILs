const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [length, word] = input.shift().split(" ");
let cnt = 0;
for(let i = 0 ; i < parseInt(length) ; i++){
    if(input[i] === word) cnt++
}
console.log(cnt);