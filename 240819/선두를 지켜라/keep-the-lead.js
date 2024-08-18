const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const runner = input.shift().split(" ").map(Number);
const aMoving = input.splice(0,runner[0]);
const bMoving = input.splice(0);


let aCnt = bCnt = aPer = bPer = 0;
let firstLine = aMoving.shift().split(" ").map(Number);
let secondLine = bMoving.shift().split(" ").map(Number);
let [aVelocity, bVelocity, aTime, bTime]  = [firstLine.shift(), firstLine.shift(), secondLine.shift(), secondLine.shift()]

let preReader = curReader = "";


let result = 0;

while (aMoving.length > 0 || bMoving.length > 0) {

    if(aMoving.length > 0 && aCnt === aTime){
        let Line = aMoving.shift().split(" ").map(Number);
        [aVelocity, aTime] = Line;
        aCnt = 0;
    }

    if(bMoving.length > 0 && bCnt === bTime){
        let Line = bMoving.shift().split(" ").map(Number);
        [bVelocity, bTime] = Line;
        bCnt = 0;
    }

    aPer += aVelocity/aTime;
    bPer += bVelocity/bTime;
    aCnt++, bCnt++;

    if (aPer > bPer) curReader = "A";
    else if (bPer > aPer) curReader = "B";
    else curReader = preReader;

    if (curReader !== preReader) {
        result++;
        preReader = curReader;
    }
}

console.log(result);