const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const firstLine = input[0].split(" ");
const aN = parseInt(firstLine[0]);
const bN = parseInt(firstLine[1]);
const numberArr_A = input[1].split(" ").map(Number);
const numberArr_B = input[2].split(" ").map(Number);

let count = 0;
if(aN > bN){
    let idx = 0;
    for(let i = 0 ; i < aN ; i++){
        if(numberArr_A[i] === numberArr_B[idx]){
            count++;
            idx++;
            if(count === bN){
              onsole.log('Yes')
              break;  
            }
        }else{
            idx = 0
            count = 0;
        }
    }
    if(count !== bN) console.log('No')
}else if(aN === bn){
    for(let i = 0; i < aN ; i++){
        if(numberArr_A[i] === numberArr_B[i]){
            count++;
            if(count === aN){
              console.log('Yes')
              break;  
            } 
        }else{
            console.log('No')
            break;
        }
    }
}