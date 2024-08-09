const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [lines, orderArr] = [input.shift(), input.map(arr => arr.split(" "))]

let min = 0
let max = 0
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
const accumulator = Array.from({ length: max + -(min) + 1 }, (v, i) => 0);
const blackArr = Array.from({ length: max + -(min) + 1 }, (v, i) => 0);
const whiteArr = Array.from({ length: max + -(min) + 1 }, (v, i) => 0);
const colorArr = Array.from({ length: max + -(min) + 1 }, (v, i) => '');


let position = -min

for(let order of orderArr){

    if(order[1] === 'R'){
        for(let i = 0 ; i < parseInt(order[0]) ; i++){
            
            accumulator[position]++;
            blackArr[position]++
            if(accumulator[position] < 4 && blackArr[position] - whiteArr[position] >= 0){
                    colorArr[position] = 'B'
            }
            if(whiteArr[position] == 2 && blackArr[position] == 2) colorArr[position] = 'G'
            position++;
        }
        position--;
    }

    if(order[1] === 'L'){
        for(let i = 0 ; i < parseInt(order[0]) ; i++){
            accumulator[position]++;
            whiteArr[position]++
            if(whiteArr[position] - blackArr[position] >= 0){
                    colorArr[position] = 'W'
            }
            if(whiteArr[position] == 2 && blackArr[position] == 2) colorArr[position] = 'G'
            position--;
        }
        position++;
    }
}

let result = [0, 0, 0];

for(let i = 0 ; i < colorArr.length ; i++){
    if(colorArr[i] === 'W') result[0]++;
    if(colorArr[i] === 'B') result[1]++;
    if(colorArr[i] === 'G') result[2]++;
}

console.log(result.join(' ').trim());