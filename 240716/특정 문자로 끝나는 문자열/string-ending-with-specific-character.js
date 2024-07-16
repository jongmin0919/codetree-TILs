const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// slice의 두번째 매개변수로 음수를 넣을 경우 뒤에서부터 인덱스가 지정됩니다. apple의 경우 -2는 le, -5는 apple를 반환합니다.
let arr = [...input.slice(0,-1)]
// 배열의 길이의 -1, 즉 끝 인덱스 요소롤 가져옵니다.
let alphabet = input[input.length - 1]


// 플래그 컨트롤을 활용한 알파벳 체크 함수
function alphaChecker(arr){
    let flag = true;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i][(arr[i].length-1)] === alphabet){
          console.log(arr[i])
          flag = false;
        } 
    }    
    // flag가 true라는건 끝에 문자가 일치하는 문자가 하나도 없다는 뜻이므로 None을 출력합니다.
    if(flag) console.log("None")
}

alphaChecker(arr);