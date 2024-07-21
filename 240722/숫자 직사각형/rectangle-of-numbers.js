const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const n = input[0];
const m = input[1];

let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));

let num = 0;
for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < m ; j++){
        
        arr2d[i][j] = ++num;
    }
}


for(let arr1d of arr2d){
    let str = "";
    for(let item of arr1d){
        str += item + " ";
    }
    console.log(str.trim());
};