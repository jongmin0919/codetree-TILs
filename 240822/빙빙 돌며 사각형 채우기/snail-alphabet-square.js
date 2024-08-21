const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

// 입력받은 n과 m을 숫자로 변환
const [n, m] = input.map(Number);

// 방향 매핑 설정 (시계 방향)
const directionMap = {
    'L': [0, 1],   // 오른쪽
    'D': [1, 0],   // 아래쪽
    'R': [0, -1],  // 왼쪽
    'U': [-1, 0]   // 위쪽
};

// 방향 순서 배열 (시계방향 순)
const directions = ['L', 'D', 'R', 'U'];
// 초기 향은 directions[dirNum(0)]
let dirNum = 0; 

let x = 0, y = 0;

// 2차원 배열 생성
let arr2D = Array.from({ length: n }, () => Array(m).fill(''));

// 알파벳 문자열 초기화
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let curIndex = 0;

// 배열에 알파벳을 채우는 작업 수행
for (let i = 0; i < n * m; i++) {
    // 현재 위치에 알파벳 채우기
    arr2D[x][y] = alphabet[curIndex];

    // 회귀 공식을 이용한 배열 순회 방법 
    curIndex = (curIndex + 1) % alphabet.length;

    // 다음 위치 계산
    const direction = directionMap[directions[dirNum]];
    let nx = x + direction[0], ny = y + direction[1];
    
    // 범위 바깥이거나 이미 채워진 경우 방향 전환
    if (nx < 0 || nx >= n || ny < 0 || ny >= m || arr2D[nx][ny] !== '') {
        dirNum = (dirNum + 1) % 4;  // 다음 방향으로 전환
        const [newX, newY] = directionMap[directions[dirNum]];
        nx = x + newX;
        ny = y + newY;
    }

    // 새로운 위치 설정
    x = nx;
    y = ny;
}

// 결과 출력
for (let i = 0; i < n; i++) {
    console.log(arr2D[i].join(' ')); 
}