const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let init = input;
let cnt = 0;

while(init < 1000){
    cnt++;
    if(init%2 === 0 ){
        init = init * 3 + 1
    } else{
        init = init * 2 + 2
    } 
}
console.log(cnt)