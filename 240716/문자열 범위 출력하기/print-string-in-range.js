const fs = require("fs");
let givenInput = fs.readFileSync(0).toString().trim();

let result = "";
for (let i = 2; i < givenInput.length && i < 10; i++) {
    result += givenInput[i];
}

console.log(result);