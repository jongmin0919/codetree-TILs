const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim();

for(let i = 0; i < givenStr.length ; i++){
    console.log(givenStr[i]);
}