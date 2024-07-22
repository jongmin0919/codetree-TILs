const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

let arr2d = Array.from({ length: input }, () => Array(input).fill(0));

function printArr(arr){
    for (let row of arr) {
        let str = "";
        for (let elem of row) {
            str += elem + " ";
        }
        console.log(str.trim());
    }
}

for(let i = 0 ; i < input ; i++){
    for(let j = 0 ; j < input ; j++){
        if(i == 0 || j == 0) {
            arr2d[i][j] = 1;
        } else {
            arr2d[i][j] = arr2d[i-1][j] + arr2d[i][j-1] + arr2d[i-1][j-1];
        }
    }
}

printArr(arr2d);