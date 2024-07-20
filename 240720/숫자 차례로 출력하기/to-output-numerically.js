const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

//재귀 함수들을 관리하는 메서드
function printNumbers(n){

    let acendingStr = "";
    let descendingStr = "";

    // 첫 번째 재귀 함수: 1부터 N까지 숫자를 더함
    function ascendingPrint(n) {
        if (n <= 0) {
            return;
        }
        ascendingPrint(n - 1);
        // 감소한 뒤의 숫자부터, 즉 작은 숫자부터
        acendingStr += n + " ";
    }

    // 두 번째 재귀 함수: N부터 1까지 숫자를 더함
    function descendingPrint(n) {
        if (n <= 0) {
            return;
        }
        // 감소하기 전, 즉 큰 숫자부터
        descendingStr += n + " ";
        descendingPrint(n - 1);
    }

    ascendingPrint(n)
    descendingPrint(n)
    console.log(acendingStr.trim());
    console.log(descendingStr.trim());
}

printNumbers(input);