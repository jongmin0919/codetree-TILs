const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim().split("\n");
let letter = givenStr[0]
let length = parseInt(givenStr[1]);

let result = "";
// 주어진 숫자보다 문자열길이가 길거나 같으면 뒤에서부터 역순으로 차례대로 출력하고, 주어진 숫자가 더 크면 뒤부터 몽땅 출력.
if(length <= letter.length){
    for(let i = (letter.length) - 1  ; i > (letter.length - length) -1 ; i--){
        result += letter[i];
    }
}else{
    for(let i = letter.length - 1 ; i >= 0 ; i--){
        result += letter[i];
    }
}

console.log(result);