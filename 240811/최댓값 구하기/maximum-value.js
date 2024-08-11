const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let max = 0;

if(a !== b && a !== c){
    if(a > b && a > c) max = a;
    else if(b > a && b > c) max = b;
    else max = c;
}else if((a === b && a !== c) || (a !== b && a === c)){
    if(a > c ) max = a;
    else max = c;
}else max = a;

console.log(max);