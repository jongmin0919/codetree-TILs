const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);


let idx = 0;
while(true){
    if(idx === input[0]) break;
    str = "";
    for(let i = 0 ; i < input[1] ; i++){
        str += "1";
    }
    console.log(str.trim());
    idx++;
}