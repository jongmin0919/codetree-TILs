const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const runner = input.shift().split(" ").map(Number);
const aMoving = input.splice(0, runner[0]);
const bMoving = input.splice(0);

let firstArr = [0];
let secondArr = [0];

let aLine, bLine;
let aSecond = 0, bSecond = 0;
let aPosition = 0, bPosition = 0;
// 이전 선두를 저장하기 위한 변수를 null값으로 설정
let previousRunner = null; 
// 선두 변경 횟수를 카운트하는 변수
let count= 0; 

while (aMoving.length > 0 || bMoving.length > 0) {
    if (aMoving.length > 0 && aSecond === 0) {
        aLine = aMoving.shift();
        [aPosition, aSecond] = [parseInt(aLine.split(" ")[0]), parseInt(aLine.split(" ")[1])];
    }

    if (bMoving.length > 0 && bSecond === 0) {
        bLine = bMoving.shift();
        [bPosition, bSecond] = [parseInt(bLine.split(" ")[0]), parseInt(bLine.split(" ")[1])];
    }

    const timeLine = Math.min(aSecond, bSecond);

    for (let i = 0; i < timeLine; i++) {
        // 매 시간마다 거리를 나눠 남아있는 거리를 누적 저장
        // 그림 설명 참조
        aPosition += parseInt(aLine.split(" ")[0]) / parseInt(aLine.split(" ")[1]);
        bPosition += parseInt(bLine.split(" ")[0]) / parseInt(bLine.split(" ")[1]);


        // 각 선두의 현재 위치(position들)들을 각각의 배열에 담아줌
        firstArr.push(aPosition);
        secondArr.push(bPosition);

        //각 선두들의 시간들을 while문 마다 1씩 감소
        aSecond--;
        bSecond--;

        // 현재 위치를 기준으로 선두를 판단하는 current
        let currentRunner;
        if (aPosition > bPosition) currentRunner = 'A';
        else if (bPosition > aPosition) currentRunner = 'B';
        else currentRunner = 'tie'; 
       

        // 이전 선두가 null이 아니고(아직 초기화 되지 않은 상태), 이전 선두와 현재 선두가 같지 않으며(자리 바뀜 없는 상태)
        // 현재 선두가 tie(현재 상태가 동률이 아니라는 말은 A나 B 둘 중 하나가 선두라는 뜻)가 아니라고 한다면 선두 바뀜(count) 증가 
        if (previousRunner !== null && currentRunner !== previousRunner && currentRunner !== 'tie') {
            count++;
        }

        // 현재 선두의 값을 다음 while문에 반복 비교를 위해 previousRunner에 할당
        // 왜 위의 if문에서 초기화를 하지 않았냐면 
        if(currentRunner !== 'tie') previousRunner = currentRunner;
    }
}

console.log(count);