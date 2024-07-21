const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').filter(n => n);

const length = 3;

const first2d = [];
const second2d = [];


for(let i = 0 ; i < length ; i++){
    first2d.push(input[i].split(' ').map(Number));
};

for(let i = length ; i < length*2 ; i++){
    second2d.push(input[i].split(' ').map(Number));
};

let resultArr = Array(length).fill(0).map(() => Array(length).fill(0));

for(let i = 0 ; i < length ; i++){
    for(let j  = 0 ; j < length ; j++){
        resultArr[i][j] = first2d[i][j] * second2d[i][j];
    }
}

for(let first of resultArr){
    let str = "";
        for(let second of first){
            str += second + " ";
        }
    console.log(str.trim());
}