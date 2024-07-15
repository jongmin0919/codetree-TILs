const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let arr = ["apple", "banana", "grape", "blueberry", "orange"];


let stack = [];

for(let i = 0; i < arr.length ; i++){
    if(arr[i][2] === input || arr[i][3] === input){
        stack.push(arr[i])
    } 
}

stack.forEach(item => console.log(item));
console.log(stack.length);