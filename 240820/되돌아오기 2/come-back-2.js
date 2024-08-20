const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("");

// 방향 매핑
const directionMap = {
    'N': [0, 1],   
    'E': [1, 0],   
    'S': [0, -1],  
    'W': [-1, 0]   
};

// 객체에서 꺼내오는 방법으로 방향 전환점에 사용할 curDirection과 해당 변수를 이용해 꺼내올
// 문자 방향들을 보관하는 directionOrder 배열을 초기화
const directionOrder = ['N', 'E', 'S', 'W'];  
let curDirection = 0;  

// 원점과 누적 시간 초기화
let x = 0, y = 0;
let time = 0;

// for문을 도는 동안 각 명령마다 다음과 같은 코드 수행, 단 시간은 누적이 되어야 하기에 전역 변수 time은 계속 증가
for (const command of input) {
    // 왼쪽 방향 회전일 경우 역회전 공식으로 회전 후 현재 curDirection에 할당
    if (command === 'L') {
        curDirection = (curDirection + 3) % 4;  
        time += 1;
    // 오른쪽 회전일 경우 정회전 공식으로 회전 후 현재 curDirection에 할당
    } else if (command === 'R') {
        curDirection = (curDirection + 1) % 4;  
        time += 1;
    // 전진일 경우 현재 현재 방향의 각 dx와 dy의 값(directionMap 객체의)을 x와 y에 누적 할당하여 전진효과
    } else if (command === 'F') {
        // 현재 방향에 대한 문자열(directionOrder)을 찾아 Map에서 매핑 후 각 값들을 dx와 dy에 할당하고 x와 y에 재할당
        const [dx, dy] = directionMap[directionOrder[curDirection]];
        x += dx;
        y += dy;
        time += 1;
        
        // 시작점으로 돌아온 경우(x와 y의 원래 현재 좌표가 0,0인 경우) 누적된 시간 출력 후 함수 종료
        if (x === 0 && y === 0) {
            console.log(time);
            return;
        }
    }
}

// 함수가 종료되지 않았다면 원점에 귀환하지 않은 것이므로 -1를 출력
console.log(-1);