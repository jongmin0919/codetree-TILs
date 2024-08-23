const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const people = input[1].split(" ").map(Number);

// 최소 거리를 찾아야 하므로 최대값(Infinity)로 설정
let min = Infinity;

for (let i = 0; i < n; i++) {
    let total = 0;
    for (let j = 0; j < n; j++) {
        /*
          i가 집이고, j가 사람이라고 하면 편한데
          만약 첫번째 집(i가 0일때)일때를 기준으로 거리를 구하고자 할때는 
          첫번째 사람(1)은 자기 집에 있으니 1 * 0이 됨 (거리 없음)
          그러나 두번째 사람(2)은 거리가 1이 걸리기 때문에 2 * 1이 걸림
          나머지도 3 * 2, 2 * 3, 6 * 4 만큼의 거리가 걸림 
          그래서 이들의 합이 36이 되는거임

          반대로 3번의 집(i가 2 일때)는 처음부터 계산해보면
          1 * (2 - 0), 2 * (2 - 1), 3 * (2 - 2), 2 * (2 - 3), 6 * (2 - 4)의 거리 계산이 나옴
          그래서 결과가 18이 나오는 것임
        */
         
        total += people[j] * Math.abs(i - j);
    }
    // 전체 구한 거리의 합이 최소거리의 값보다 작을 때 그 값으로 대체
    if (total < min) {
        min = total;
    }
}

console.log(min);