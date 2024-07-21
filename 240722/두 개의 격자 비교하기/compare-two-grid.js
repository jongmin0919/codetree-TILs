const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let length = input.shift();
length = length.split(" ");
const n = parseInt(length[0]);
const m = parseInt(length[1]);

const first2d = [];
const second2d = [];

for(let i = 0 ; i < n ; i++){
    first2d.push(input[i].split(' ').map(Number));
};

for(let i = n ; i < n*2 ; i++){
    second2d.push(input[i].split(' ').map(Number));
};

let resultArr = Array(n).fill(0).map(() => Array(m).fill(0));

for(let i = 0 ; i < n ; i++){
    for(let j  = 0 ; j < m ; j++){
        resultArr[i][j] = first2d[i][j] === second2d[i][j] ? 0 : 1;
    }
}

for(let first of resultArr){
    let str = "";
        for(let second of first){
            str += second + " ";
        }
    console.log(str.trim());
}