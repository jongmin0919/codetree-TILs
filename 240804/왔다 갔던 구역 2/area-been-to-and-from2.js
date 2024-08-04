const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [lines, orderArr] = [input.shift(), input.map(arr => arr.split(" "))]

let result = orderArr.forEach

let min = Infinity
let max = -Infinity
let accState = 0;

orderArr.forEach(order => {
    let num = 0;
    if(order[1] === 'R') num = parseInt(order[0]);
    else num = -(parseInt(order[0]));

    accState += num;
    if(accState < min) min = accState;
    if(accState > max) max = accState;
})

// from의 콜백 함수의 두번째 매개변수 (인덱스 값)와 min 값을 이용해 배열의 총 길이(0을 포함한 14개의 요소)를 순차적으로 생성
const rangedArray = Array.from({ length: max - min + 1 }, (v, i) => min + i);
const accumulator = Array.from({ length: max - min + 1 }, (v, i) => 0);

// position의 기준을 rangedArray의 0의 인덱스로 기준을 잡음
let position = -min;

for(let order of orderArr){
    // 이동키가 R일 경우 for문을 이동 숫자만큼 증가하면서 대응되는 자리의 accumulator 자리를 증가한 후 positin 증가 (오른쪽 이동)
    if(order[1] === "R"){
        for(let i = 0 ; i < parseInt(order[0]) ; i++){
            accumulator[position]++;
            position++
        }
    // 이동키가 R 이외인 L일 경우 for문을 이동 숫자만큼 증가하면서 대응되는 자리의 accumulator 자리를 증가한 후 positin 감소 (왼쪽 이동)
    }else {
        for(let i = 0 ; i < parseInt(order[0]) ; i++){
            accumulator[position]++;
            position--
        }
    }
}

// 2번 이상 지난 경우, 즉 2번 이상 카운트 된 좌표의 개수만 filter로 받아 그 개수를 출력하면 됨
result = accumulator.filter(count => count >= 2).length;
console.log(result);