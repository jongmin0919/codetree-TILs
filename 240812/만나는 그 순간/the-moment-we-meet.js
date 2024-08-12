const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const runner = input.shift().split(" ").map(Number);
const aMoving = input.splice(0,runner[0]);
const bMoving = input.splice(0);

let firstArr = [];
let secondArr = [];
firstArr.push(0);
secondArr.push(0);
let aLine, bLine;
let aSecond = 0, bSecond = 0;
let aOrder, bOrder;
let aPosition = 0, bPosition = 0;
let flag = false;
let result = 0;

while (aMoving.length > 0 || bMoving.length > 0) {

    if (aMoving.length > 0 && aSecond === 0) {
        aLine = aMoving.shift();
        [aOrder, aSecond] = [aLine.split(" ")[0], parseInt(aLine.split(" ")[1])];
    }
    if (bMoving.length > 0 && bSecond === 0) {
        bLine = bMoving.shift();
        [bOrder, bSecond] = [bLine.split(" ")[0], parseInt(bLine.split(" ")[1])];
    }

    if(aSecond !== 0 && bSecond !== 0) count = Math.min(aSecond, bSecond)
    else count = Math.min(aSecond, bSecond)

    for (let i = 0; i < count; i++) {
        if (aOrder === "R" && aSecond > 0) aPosition++;
        if (aOrder === "L" && aSecond > 0) aPosition--;
        if (bOrder === "R" && bSecond > 0) bPosition++;
        if (bOrder === "L" && bSecond > 0) bPosition--;

        firstArr.push(aPosition);
        secondArr.push(bPosition);
        
        result++;
        aSecond--;
        bSecond--;
        if (firstArr[result] === secondArr[result]) {
            flag = true;
            break;
        }
    }
    if(flag) break;
}

if(!flag) console.log(-1);
else console.log(result);