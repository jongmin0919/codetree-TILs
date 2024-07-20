const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(" ");


function linerItems() {
      
    console.log(arr.sort((a, b) => a - b).join(" "))
    console.log(arr.sort((a, b) => b - a).join(" "))
}

linerItems();