const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// slice의 두번째 매개변수로 음수를 넣을 경우 뒤에서부터 인덱스가 지정됩니다. apple의 경우 -2는 le, -5는 apple를 반환합니다.
let arr = [...input.slice(1,input.length-1)]
let length = parseInt(input[0]);
let alphabet = input[input.length - 1];

// 알파벳에 대응되는 문자열의 개수와 
function printAverageCounter(arr, length, alphabet){
    let cnt = 0;
    let total = 0;
    for(let i = 0; i < length ; i++){
        if(arr[i][0] === alphabet){
            cnt++;
            total += arr[i].length
        }
    }    
    // 백틱을 이용해 cnt와 total을 이용하여 평균을 구하고 toFixed로 두자리 까지 출력
    console.log(`${cnt} ${(total/cnt).toFixed(2)}`)
}

printAverageCounter(arr, length, alphabet);