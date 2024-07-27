const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
let [firstH, firstM, secondH, secondM] = input

let accTime = 0;

while(true){
    if(firstH === secondH && firstM === secondM) break;

    firstM++
    accTime++;
    if(firstM === 60){
        firstH++;
        firstM = 0;
    }
}

console.log(accTime);