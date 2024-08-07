const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const [start, end] = [...input]

let cnt = 0;
for(let i = start ; i <= end ; i++){
    let tempArr = [];
    for(let j = 1 ; j <= i ; j++){
        if(i%j === 0) tempArr.push(j)
    }
    if(tempArr.length === 3) cnt++;
}
console.log(cnt);