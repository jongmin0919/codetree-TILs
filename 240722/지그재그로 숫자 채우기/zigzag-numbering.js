const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const n = input[0];
const m = input[1];

let arr2d = Array(n).fill(0).map(()=> Array(m).fill(0));


let num = 0;
for(let i = 0 ; i < m ; i++){
    if(i%2 === 0){
        for(let j = 0 ; j < n ; j++){
            arr2d[j][i] = num++;
        }
    }else{
        for(let j = n-1 ; j >= 0 ; j--){
            arr2d[j][i] = num++;
        }
    }
}

for(let arr of arr2d){
    str = "";
    for(item of arr){
        str += item + " ";
    }
    console.log(str.trim());
}