const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const length = parseInt(input.shift());

for(let i = 0 ; i < length ;i++){
    let num = parseInt(input.shift());
    let cnt = 0;
    while(num > 1){
        if(num%2 === 0)num /= 2;
        else num = num * 3 + 1;
        cnt++;
    }
    console.log(cnt);
}