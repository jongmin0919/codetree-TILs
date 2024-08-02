const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());


let cnt = input;
while(cnt !== 0){
    
    let line = "";
    for(let i = 1 ; i  <= input ; i++){
        if(i >= cnt) line += i + " ";
    }
    console.log(line.trim());
    cnt--;
}