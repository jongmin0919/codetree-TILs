const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let arr = ["apple", "banana", "grape", "blueberry", "orange"];


let stack = [];

for(let i = 0; i < arr.length ; i++){
    if(arr[i][2] === input || arr[i][3] === input){
        stack.push(arr[i])
        console.log(arr[i])
    } 
}

/* 
    foreach로 돌려도 되긴 하는데 애초에 윗쪽 for문에서 출력한 후 사이즈만 출력해 줘도 됨.
    stack.forEach(item => console.log(item));
*/

console.log(stack.length);