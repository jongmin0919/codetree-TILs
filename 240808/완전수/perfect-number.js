const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const [start, end] = [...input]

let cnt = 0;
for(let i = start ; i <= end ; i++){
    let tempArr = [];
    for(let j = 1 ; j < i ; j++){
        if(i%j === 0) tempArr.push(j)
    }
    if(tempArr.reduce((acc, cur) => acc + cur, 0) === i) cnt++;
}
console.log(cnt);