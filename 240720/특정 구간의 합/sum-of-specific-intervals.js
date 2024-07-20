const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let length = input[0].split(" ");
length = parseInt(length[1]);
let numberStream = input[1].split(" ");
numberStream = numberStream.map(Number);


function indexRangeAdd(){
    let idx = 2;
    for(let i = 0 ; i < length ; i++){
        let result = 0;
        let position = input[idx].split(" ");
        position = position.map(Number);
        
        for(let j = position[0] - 1 ; j < position[1] ; j++){
            result += numberStream[j];
        }
        idx++;
        console.log(result);
    }
}

indexRangeAdd();