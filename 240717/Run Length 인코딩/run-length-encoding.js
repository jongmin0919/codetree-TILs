const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let rne = "";

let alphaStack = [];
let encodingStack = [];

let state = input[0];
let count = 0;
alphaStack.push(input[0]);

for(let i = 0 ; i <= input.length ; i++){
    if(state === input[i]){
        count++;
    }else{
        encodingStack.push(count);
        state = input[i];
        alphaStack.push(state);
        i--;
        count = 0;
    }
}
if(alphaStack[alphaStack.length - 1] === undefined) alphaStack.pop();

let result = "";
for (let i = 0; i < alphaStack.length; i++) {
    result += alphaStack[i] + encodingStack[i];
}

console.log(`${result.length}\n${result}`);