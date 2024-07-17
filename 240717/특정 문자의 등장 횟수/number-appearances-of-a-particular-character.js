const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let arr = [0,0]
for(let i = 0 ; i < input.length ; i++){
    if(input[i] === 'e' && input[i+1] === 'e') arr[0]++
    else if(input[i] === 'e' && input[i+1] === 'b') arr[1]++
}

console.log(`${arr[0]} ${arr[1]}`)