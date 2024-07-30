const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let cnt = -1;
let filteredArr = input.filter((item,i) => {
    cnt++
    return item != 0 && i%2 === 0
})
console.log(cnt)
filteredArr.forEach(item => console.log(item))