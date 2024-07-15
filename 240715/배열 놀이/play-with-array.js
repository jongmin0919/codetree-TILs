const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];
let firstLine = input[0].split(' ').map(Number);
let testCase = firstLine[1];

arr = input[1].split(' ').map(Number);

for(let i = 2 ; i < testCase + 2 ; i++){
    let query = input[i].split(' ').map(Number);
    if(query[0] == 1){
        
        console.log(arr[query[1] - 1]);
        continue;
    }
    if(query[0] == 2){
        let letter = arr.indexOf(query[1]) == undefined ? 0 : arr.indexOf(query[1]) + 1 
        console.log(letter)
        continue;
    }
    if(query[0] == 3){
        let startPoint = query[1] - 1;
        let endPoint = query[2];
        let letter = "";
        for(let i = startPoint ; i < endPoint ; i++){
            letter += `${arr[i]} `
        }
        console.log(letter.trim());
        continue;
    }
}