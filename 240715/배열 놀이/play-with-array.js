const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];
let firstLine = input[0].split(' ').map(Number);
let testCase = firstLine[1];



/*입력 형식에서 햇갈렸긴 했는데, 얼추 생각을 해본것은
첫번째 줄 : n개의 원소와 q개의 테스트 케이스
두번째 줄 : n개의 원소가 순서대로 나열
세번째 줄 부터 : 첫번째 원소는 1부터 3까지의 테스트 케이스, 두번째 부터는 각각의 1의 a, 2의 b, 3의 s와 e의 요소입니다.
*/

arr = input[1].split(' ').map(Number);

// 범위는 2부터 시작해 input.length까지 돌아도 상관 없습니다.
for(let i = 2 ; i < testCase + 2 ; i++){
    // 각 쿼리마다 숫자로 바꿔주고 공백을 기준으로 나눠서 배열로 반환 받기
    let query = input[i].split(' ').map(Number);
    // 테스트 케이스가 1이면 a번째 (a-1)를 출력
    if(query[0] == 1){
        console.log(arr[query[1] - 1]);
        continue;
    }
    if(query[0] == 2){
        // 테스트 케이스가 2이면 indexOf가 존재할 때 b의 인덱스의 위치 + 1(0부터 시작하므로) 를 반환받음. 
        let letter = arr.indexOf(query[1]) == undefined ? 0 : arr.indexOf(query[1]) + 1 
        console.log(letter)
        continue;
    }
    if(query[0] == 3){
        // 테스트 케이스가 3이면 시작값과 종료값을 정하고, 공백으로 배열(arr)의 요소들을 join으로 문자열로 합친 뒤 arr에서 slice로 잘라서 범위만큼 잘라 반환
        let startPoint = query[1] - 1;
        let endPoint = query[2];
        let letter = arr.slice(startPoint, endPoint).join(' ');
        console.log(letter);
        continue;
    }
}