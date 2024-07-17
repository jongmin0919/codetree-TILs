const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let rne = "";

// 각 알파벳을 보관할 스택
let alphaStack = [];

// 각 알파벳마다 등장 횟수를 보관할 스택
let encodingStack = [];

// state에 문자열의 첫번째를 넣고, 알파스택에도 첫번째 요소를 넣어준다.
let state = input[0];
let count = 0;
alphaStack.push(input[0]);

// for문을 돌리면서 현재 state와 i가 같으면 count를 증가
// 같지 않다면 지금까지 누적된 각 알파벳의 카운트 값을 스택에 저장하고
// state를 이전 알파벳과 같지 않는 현재의 알파벳으로 교체한 뒤
// 알파스택에 현재 알파벳을 담고 i를 감소하여 다시 현재 위치부터(i++를 한 번 하게 되므로 i--를 해야함) 돌게함
// count는 0으로 초기화
for(let i = 0 ; i <= input.length ; i++){
    if(state === input[i]){
        count++;
    }else{
        encodingStack.push(count);
        state = input[i];
        alphaStack.push(state);
        i--;
        count = 0;
    }
}
// alphastack에는 미리 하나의 값을 넣어놔서 for문을 다 돌고나면 alphastack에는 else문에 의해 undefined가 들어가 있음
//그래서 마지막 undefined를 제거해줄 필요가 있음
if(alphaStack[alphaStack.length - 1] === undefined) alphaStack.pop();

let result = "";
// result에 각 스택에 대응되는 값들을 이어붙여 result에 저장한 후
for (let i = 0; i < alphaStack.length; i++) {
    result += alphaStack[i] + encodingStack[i];
}

// result의 길이와 result를 차례대로 출력
console.log(`${result.length}\n${result}`);