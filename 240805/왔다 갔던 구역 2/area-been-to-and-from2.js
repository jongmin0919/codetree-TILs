const fs = require('fs');

// 입력을 받아서 줄 단위로 나누기
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 첫 번째 줄은 n, 나머지는 n개의 줄로 이루어진 명령
const n = parseInt(input.shift());
const orderArr = input.map(line => line.split(" "));

// let min = Infinity
// let max = -Infinity
// let num = 0;

// orderArr.forEach(order => {
//     let temp = 0;
//     if(order[1] === 'R') temp = parseInt(order[0]);
//     else temp = -(parseInt(order[0]));
//     num += temp;
//     if(num < min) min = num;
//     if(num > max) max = num;
// })

//const rangedArray = Array.from({ length: max + Math.abs(min) + 1 }, (v, i) => min + i);

// 길이가 2002인 배열을 생성하고 0으로 초기화, 한 번 이동할 때 +1((색칠) 해줄 것임
const accumulator = new Array(2002).fill(0);

let position = 1000; // -1000 < r < 1000 을 0 < r+1000 < 2000 으로 바꿨으므로, 초기 위치는 0 + 1000 임

for(let order of orderArr){
    // [ [ '2', 'R' ], ['6', 'L' ], ... ]

    // for문을 이동 숫자만큼 증가
    for(let i = 0 ; i < parseInt(order[0]); i++){ // i가 0부터 시작하므로 조건문을 i < parseInt(order[0]) 로 수정
        // 오른쪽 이동
        if(order[1] === "R"){
            position++;
            accumulator[position-1]++;  // 지나간 선분에 +1 
            // position-1과 position을 잇는 길(선분)을 색칠
        }
        // 이동키가 R 이외인 L일 경우 for문을 이동 숫자만큼 증가하면서 대응되는 자리의 accumulator 자리를 증가한 후 positin 감소 (왼쪽 이동)
        else if(order[1] === "L") {
            // 왼쪽 이동
            position--;
            // 지나간 선분에 +1 저장
            accumulator[position]++;
            // position-1과 position을 잇는 길(선분)을 색칠

        }
    }
}

// 색칠이 2번 이상 된 선분을 카운트하기 위한 변수
let cnt=0;

// accumulator배열을 처음부터 끝까지 반복 
for (let i = 0; i < accumulator.length; i++) {
    // accumulator[i]의 값이 2 이상(두 번 이상 지나간)인 선분을 카운트
    if (accumulator[i] >= 2) { 
        cnt++;
    }
}

console.log(cnt)