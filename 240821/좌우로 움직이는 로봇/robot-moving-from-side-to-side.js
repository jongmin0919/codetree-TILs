const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const runner = input.shift().split(" ").map(Number);
const aMoving = input.splice(0, runner[0]);
const bMoving = input.splice(0);

// 각 A와 B의 배열
let arrA = [0];
let arrB = [0];

// A와 B 각각의 주어지는 라인과 시간, 위치를 초기화
let aIndex = 0, bIndex = 0;
let aSecond = 0, bSecond = 0;
let aOrder, bOrder;
let aPosition = 0, bPosition = 0;

let result = 0;

while (aIndex < aMoving.length || bIndex < bMoving.length || aSecond > 0 || bSecond > 0) {
    if (aIndex < aMoving.length && aSecond === 0) {
        let [second, order] = aMoving[aIndex].split(" ");
        aSecond = parseInt(second);
        aOrder = order;
        aIndex++;
    }
    
    if (bIndex < bMoving.length && bSecond === 0) {
        let [second, order] = bMoving[bIndex].split(" ");
        bSecond = parseInt(second);
        bOrder = order;
        bIndex++;
    }
    
    // count는 aSecond와 bSecond 중 큰 값으로 설정
    let count = Math.max(aSecond, bSecond);
    
    for (let i = 0; i < count; i++) {
        if (aOrder === "R" && aSecond > 0) aPosition++;
        if (aOrder === "L" && aSecond > 0) aPosition--;
        if (bOrder === "R" && bSecond > 0) bPosition++;
        if (bOrder === "L" && bSecond > 0) bPosition--;

        arrA.push(aPosition);
        arrB.push(bPosition);

        // 마지막 두 요소 비교
        if (arrA[arrA.length - 1] === arrB[arrB.length - 1] && arrA[arrA.length - 2] !== arrB[arrB.length - 2]) {
            result++;
        }
        
        if (aSecond > 0) aSecond--;
        if (bSecond > 0) bSecond--;
    }
}

console.log(result);