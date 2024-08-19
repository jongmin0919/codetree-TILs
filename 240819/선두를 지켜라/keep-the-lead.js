const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const runner = input.shift().split(" ").map(Number);
const aMoving = input.splice(0,runner[0]);
const bMoving = input.splice(0);
let totalTime = 0;
aMoving.forEach(item => {
    totalTime += Number(item.split(" ")[1])
})

// 첫 번째 입력 값 활용할 수 있게 초기값 설정 변경
let aCnt = bCnt = aPer = bPer = 0;
// let firstLine = aMoving.shift().split(" ").map(Number);
// let secondLine = bMoving.shift().split(" ").map(Number);
let aVelocity = bVelocity = aTime = bTime = 0
//[firstLine.shift(), firstLine.shift(), secondLine.shift(), secondLine.shift()]

let preReader = curReader = "";

let result = 0;

for(let i = 0 ; i < totalTime ; i++){
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

    // 이동 거리 v를 주어진 t번만큼 더해주기
    aPer += aVelocity;
    bPer += bVelocity;
    aCnt++, bCnt++;
    //console.log(aPer, "|",  bPer);


    if (aPer > bPer) curReader = "A";
    else if (bPer > aPer) curReader = "B";
    else curReader = preReader;

    if (curReader !== preReader) {
        result++;
        preReader = curReader;
    }
}

// 첫 번째 추월 카운팅 한 거 빼주기
if(result > 0) result -= 1;
console.log(result)