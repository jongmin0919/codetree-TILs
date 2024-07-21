const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

const n = input;

let arr2d = Array.from({ length: n }, () => Array(n).fill(0));

let num = 1;
for (let i = n - 1; i >= 0; i--) {
    if(n%2 === 0){
        if (i % 2 === 0) {
            for (let j = 0; j < n; j++) {
                arr2d[j][i] = num++;
            }
        } else {
            for (let j = n - 1; j >= 0; j--) {
                arr2d[j][i] = num++;
            }
        }
    }else{
        if (i % 2 !== 0) {
            for (let j = 0; j < n; j++) {
                arr2d[j][i] = num++;
            }
        } else {
            for (let j = n - 1; j >= 0; j--) {
                arr2d[j][i] = num++;
            }
        }
    }
}

for (let arr of arr2d) {
    let str = "";
    for (let item of arr) {
        str += item + " ";
    }
    console.log(str.trim());
}