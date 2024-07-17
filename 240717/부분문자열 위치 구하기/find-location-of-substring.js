const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [letterA, letterB] = [input[0], input[1]]

let result = 0;
for(let i = 0 ; i < letterA.length ; i++){
    if(letterA[i] === letterB[0]){
        let flag = true;
        for(let j = i; j < letterB.length + i ; j++){
            if(letterA[j] !== letterB[j]) false;
        }
        if(flag){
            result = i
            break;
        }else{
            result = -1
            continue;
        }
    }
}

console.log(result ? result : -1);