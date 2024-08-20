const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const runner = input.shift().split(" ").map(Number);
const aMoving = input.splice(0,runner[0]);
const bMoving = input.splice(0);

// 각 A와 B의 배열
let arrA = [];
let arrB = [];

// A와 B 배열의 첫번째 부분에는 0을 집어넣음 (둘 다 0에서 출발하므로)
arrA.push(0);
arrB.push(0);

// A와 B 각각의 주어지는 라인과 시간, 위치를 초기화
let aLine, bLine;
let aSecond = 0, bSecond = 0;
let aOrder, bOrder;
let aPosition = 0, bPosition = 0;

let result = 0;

// aMoving과 bMoving이 남아있는 동안 while문 돌기
while(aMoving.length > 0 || bMoving.length > 0){
    if(aMoving.length !== 0 && aSecond === 0){
        let aLine = aMoving.shift().split(" ");
        [aSecond, aOrder] = [parseInt(aLine[0]), aLine[1]]
    }
    
    if(bMoving.length !== 0 && bSecond === 0){
        let bLine = bMoving.shift().split(" ");
        [bSecond, bOrder] = [parseInt(bLine[0]), bLine[1]]
    }
     
//   count를 선정하는 기준은 aSecond와 bSecond가 0이 아니고 남아있는 상태일 때 최소값을 넣고, 둘 중 하나가 0이면 그 중에 큰 값을 count로 선정
    if(aSecond !== 0 && bSecond !== 0) count = Math.abs(Math.min(aSecond, bSecond))
    else count = Math.abs(Math.max(aSecond, bSecond))

    for(let i = 0 ; i < count ; i++){
        if (aOrder === "R" && aSecond > 0) aPosition++;
        if (aOrder === "L" && aSecond > 0) aPosition--;
        if (bOrder === "R" && bSecond > 0) bPosition++;
        if (bOrder === "L" && bSecond > 0) bPosition--;

    arrA.push(aPosition);
    arrB.push(bPosition);

    // arrA와 arrB의 배열 길이의 마지막, 즉 최신의 것이 서로 같고, 최신 직전의 것들이 서로 다를 때 result를 증가
    if(arrA[arrA.length - 1] === arrB[arrB.length - 1] && arrA[arrA.length - 2] !== arrB[arrB.length - 2]) result++;
    
    aSecond--, bSecond--;
    }
}

console.log(result)