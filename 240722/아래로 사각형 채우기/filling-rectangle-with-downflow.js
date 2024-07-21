const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

let arr2d = Array(input).fill(0).map(()=> Array(input).fill(0));

let num = 0;
for(let i = 0 ; i < input ; i++){
    for(let j = 0 ; j < input ; j++){
        arr2d[j][i] = ++num;
    }
}

for(let arr of arr2d){
    str = "";
    for(let item of arr){
        str += item + " ";
    }
    console.log(str.trim());
}