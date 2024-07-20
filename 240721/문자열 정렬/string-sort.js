const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[0].split("");

function linerItems(arr) {
    console.log(arr.sort().join(""));
}

linerItems(arr);