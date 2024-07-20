const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let num = input[0].split(" ");
num = parseInt(num[1]);
let numberStream = input[1].split(" ");

function repeatAdd(){
    let result = 0;
    while(num > 0){
        result += parseInt(numberStream[num-1]);
        if(num&2 !== 0) num--
        else num /= 2
    }
    console.log(result)
}

repeatAdd();