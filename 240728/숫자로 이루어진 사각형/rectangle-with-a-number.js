const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());



let cnt = 1;
for(let i = 0 ; i < input ; i++){
    let result = "";
    for(let j  = 0 ; j < input ; j++){
        if(cnt > 9) cnt = 1
        result += cnt + " ";
        cnt++;
    }
    console.log(result);
}