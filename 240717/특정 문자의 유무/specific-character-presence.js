const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let arr = ["No", "No"];
for(let i = 0 ; i < input.length ; i++){
    if(input[i] === 'e' && input[i+1] === 'e') arr[0] = 'Yes';
    else if(input[i] === 'a' && input[i+1] === 'b') arr[1] = 'Yes';
}

console.log(`${arr[0]} ${arr[1]}`)