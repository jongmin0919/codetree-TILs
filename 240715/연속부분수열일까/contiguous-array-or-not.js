const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const firstLine = input[0].split(" ");
const aN = parseInt(firstLine[0]);
const bN = parseInt(firstLine[1]);
const numberArr_A = input[1].split(" ").map(Number);
const numberArr_B = input[2].split(" ").map(Number);


// B가 A의 연속되는 부분수열인지를 체크하려면 B의 idx번째에 A의 i번쨰 수와 같을 때 count와 idx를 증가시키고, 아니라면 idx와 count를 초기화하여 다시 새야합니다.
// for문이 끝나기 전에 count가 bN과 같을 경우, 즉 연속되는 부분수열이면 Yes를 출력하고, for문이 끝난 후 부분수열이 아니라면 No를 출력합니다.
// 마지막 else문은 입력된 A수열이 B수열보다 같거나 작은 경우, 즉 애초에 B수열이 A수열의 부분집합이 될 수 없는 상태이므로 No를 출력합니다.
let count = 0;
if (aN >= bN) {
    let idx = 0;
    for (let i = 0; i < aN; i++) {
        if (numberArr_A[i] === numberArr_B[idx]) {
            count++;
            idx++;
            if (count === bN) {
                console.log('Yes');
                break;
            }
        } else {
            idx = 0;
            count = 0;
        }
    }
    if (count !== bN) {
        console.log('No');
    }
} else {
    console.log('No');
}