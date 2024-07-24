const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let firstLine = input.shift(); 
let [str, question] = firstLine.split(" ");
question = parseInt(question);
let strArr = str.split("");

input.forEach(arr => {
    
    arr = arr.split(" ")
    if(parseInt(arr[0]) === 1){
        [strArr[arr[1]-1], strArr[arr[2]-1]] = [strArr[arr[2]-1], strArr[arr[1]-1]]
        console.log(strArr.join(""));
    }else if(parseInt(arr[0]) === 2){
        strArr = strArr.map(letter => letter === arr[1]? arr[2] : letter);
        console.log(strArr.join(""));
    }
})