const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

// 문자열을 숫자로 변환
const [n, m] = input.map(Number);

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let x = 0, y = 0;
let dirNum = 0;

// 2차원 배열 생성
let arr = Array.from({ length: n }, () => Array(m).fill(0));

// 배열의 유효 범위 확인 함수
function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}

// 초기값을 설정
arr[x][y] = 1;

// 번호는 2부터 입력을 해야하므로 2부터 n * m 의 범위까지 for문 범위 반복
for (let i = 2; i <= n * m; i++) {

    // nx와 ny를 설정
    let nx = x + dx[dirNum], ny = y + dy[dirNum];
    
    // 범위 바깥에 있고, 현재 좌표에서 이미 값이 채워진 상태인 경우, 즉 회전을 해야하는 경우일 때
    if (!inRange(nx, ny) || arr[nx][ny] !== 0) {
        // 방향을 오른쪽으로 90도 만큼 돌리는 코드
        dirNum = (dirNum + 1) % 4;
        // 현재 좌표를 90도 만큼 돌린 dx와 dy로 수정하여 nx와 ny에 저장
        nx = x + dx[dirNum];
        ny = y + dy[dirNum];
    }

    // if문을 타지 않은 경우, 즉 방향 돌림이 필요없는 경우 현재 좌표(nx와 ny)를 x와 y에 저장한 뒤 해당 좌표에 값 저장
    // 참고로 nx와 ny를 배열 접근에 직접적으로 쓰지 않는 이유는 배열 접근 전에 위쪽에서 if문으로 한 번 검사를 한뒤
    // 안전하게 타진 값을 x와 y에 넣어야 하기 때문임.
    x = nx;
    y = ny;
    arr[x][y] = i;
}


// 출력
for (let i = 0; i < n; i++) {
    let print = "";
    for (let j = 0; j < m; j++) { 
        print += `${arr[i][j]} `;
    }
    console.log(print.trim()); 
}