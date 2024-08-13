const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const runner = input.shift().split(" ").map(Number);
const aMoving = input.splice(0,runner[0]);
const bMoving = input.splice(0);

// 각 A와 B의 배열
let firstArr = [];
let secondArr = [];

// A와 B 배열의 첫번째 부분에는 0을 집어넣음 (둘 다 0에서 출발하므로)
firstArr.push(0);
secondArr.push(0);

// A와 B 각각의 주어지는 라인과 시간, 위치를 초기화
let aLine, bLine;
let aSecond = 0, bSecond = 0;
let aOrder, bOrder;
let aPosition = 0, bPosition = 0;

// 같은 자리를 찾을 때 while문 종료와 찾음 여부 확인을 위한 flag와 결과값을 담을 변수 초기화
let flag = false;
let result = 0;

// aMoving(a에게 주어질 aLine들)과 bMoving(b에게 주어질 bLine들)이 살아있는한 while문은 돌아감
while (aMoving.length > 0 || bMoving.length > 0) {
    
    // 만약 aMoving(주어질 값들)이 남아있고 aSecond가 0초라 교체를 해야한다면
    // aOrder와 aSecond에 aLine의 각 자리들을 전달
    if (aMoving.length > 0 && aSecond === 0) {
        aLine = aMoving.shift();
        [aOrder, aSecond] = [aLine.split(" ")[0], parseInt(aLine.split(" ")[1])];
    }

    //b도 위 a와 마찬가지
    if (bMoving.length > 0 && bSecond === 0) {
        bLine = bMoving.shift();
        [bOrder, bSecond] = [bLine.split(" ")[0], parseInt(bLine.split(" ")[1])];
    }

    // 만약 a의 초(aSecond)가 0초가 아니고, b의 초 또한 그러하다면 제일 작은 값을 count에 저장
    // 자세한 사항은 설명 그림 참조
    if(aSecond !== 0 && bSecond !== 0) count = Math.min(aSecond, bSecond)
    // 만약 둘 중 하나가 0이라면 A와 B 중 돌아갈 값 자체가 없다는 의미이기에
    // 이럴 때는 count의 값을 큰 값으로 처리
    else count = Math.min(aSecond, bSecond)

    //for문을 count만큼 돌면서 
    for (let i = 0; i < count; i++) {
        // A와 B 각각의 명령이 R인지 L인지에 따라 
        // 각각의 A와 B의 현 위치를 증가(오른쪽) 혹은 감소(왼쪽) 시킴
        if (aOrder === "R" && aSecond > 0) aPosition++;
        if (aOrder === "L" && aSecond > 0) aPosition--;
        if (bOrder === "R" && bSecond > 0) bPosition++;
        if (bOrder === "L" && bSecond > 0) bPosition--;

        // 각각의 포지션들을 firstArr(A의 기록 배열)과 secondArr(B의 기록 배열)에 담음
        firstArr.push(aPosition);
        secondArr.push(bPosition);
        
        // 초 증가(result)
        result++;
        // A와 B의 시간 1초씩 감소
        aSecond--;
        bSecond--;

        // 만약 진행중인 두 포지의 값이 같다면 flag를 true로 설정하고 break
        if (firstArr[result] === secondArr[result]) {
            flag = true;
            break;
        }
    }
    // flag가 true라면 나머지 while문 또한 break로 종료
    if(flag) break;
}

//flag가 false인 상태, 즉 찾지 못해서 flag를 true로 바꾸지 못한 경우라면 -1를 출력
if(!flag) console.log(-1);
// 그게 아닌 경우, 특정 초에 두 배열이 같은 지점을 찾은 경우 해당 초(result) 출력
else console.log(result);
