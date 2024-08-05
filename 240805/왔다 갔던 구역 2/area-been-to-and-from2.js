const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [lines, orderArr] = [input.shift(), input.map(arr => arr.split(" "))]

let min = Infinity
let max = -Infinity
let num = 0;

orderArr.forEach(order => {
    let temp = 0;
    if(order[1] === 'R') temp = parseInt(order[0]);
    else temp = -(parseInt(order[0]));
    num += temp;
    if(num < min) min = num;
    if(num > max) max = num;
})


// from의 콜백 함수의 두번째 매개변수 (인덱스 값)와 min 값을 이용해 배열의 총 길이(0을 포함한 14개의 요소)를 순차적으로 생성
const rangedArray = Array.from({ length: max + Math.abs(min) + 1 }, (v, i) => min + i);
const accumulator = Array.from({ length: max + Math.abs(min) + 1  }, (v, i) => 0);

// position의 기준을 최소값의 역전 (0을 포함하면 최소값의 역전은 0의 인덱스 위치를 의미함) 의 인덱스로 기준을 잡음
let position = -min

for(let order of orderArr){
    // 이동키가 R일 경우 for문을 이동 숫자만큼 증가하면서 대응되는 자리의 accumulator 자리를 증가한 후 positin 증가 (오른쪽 이동)
    if(order[1] === "R"){
        for(let i = 0 ; i < parseInt(order[0]); i++){
            accumulator[position]++;
            position++;
        }
        //position--;
    // 이동키가 R 이외인 L일 경우 for문을 이동 숫자만큼 증가하면서 대응되는 자리의 accumulator 자리를 증가한 후 positin 감소 (왼쪽 이동)
    }else if(order[1] === "L") {
        position -= 1;
        for(let i = 0 ; i < parseInt(order[0]); i++){
            accumulator[position]++;
            position--;
        }
        position++;
    }
}

console.log(accumulator.map(Number).filter(num => num>=2).length)