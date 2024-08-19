const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("");

// 포지션 잡기
let position = [0,0]
// 방향은 북쪽이기에 dx, dy의 0번 인덱스를 가리키도록
let direction = 0;

let dx = [0, 1, 0, -1]; 
let dy = [1, 0, -1, 0];

for(let i = 0 ; i < input.length ; i++){
    switch(input[i]){
        // 방향이 왼쪽이면 현재 direction에서 3을 더한 뒤 %4 처리를 함
        // 얘를 들어 현재 direction이 0이고 방향 전환을 왼쪽으로 한 번 (90도 회전) 해야한다면
        // 0에서 3을 더한 뒤 4로 나눈 나머지는 3이 되므로 방향 direction이 3 (dx와 dy의 마지막 인덱스)을 선택하고
        // 거기서 다시 왼쪽으로 돌게 된다면 direction이 3인 상태에서 3을 더하면 6이 되고, 이걸 4로 나눈 나머지는
        // 2가 되므로 다시 왼쪽으로 회전하는 효과를 줄 수 있습닌다.
        case "L" :
            direction = (direction + 3) % 4;
            break;
        // 물론 오른쪽 전환은 현재 direction에서 1을 더한 뒤 4로 나누면 그 나머지를 구하는 효과로
        // 정상적으로 출력되기 때문에 크게 신경쓸 경우가 없겠습니다.
        // 다만 뒤로 전환하는 경우 전체 방향 개수에서 -1 뺸 값을 전체 수로 나눈다고 생각하시면 되는데요
        // 즉 이 원리는 일차원 배열의 앞과 뒤 전환의 원리를 이용한 것이라고 볼 수 있겠습니다.
        // (현재 인덱스에서 배열의 전체 길이로 나눌 때 0이 된다는건 다시 앞으로 돌아오는 원리를 이용)
        case "R" :
            direction = (direction + 1) % 4; 
            break;
        // F가 주어지면 현재 방향인 dx와 dy를 각각 position의 0(x 좌표)과 1(y 좌표)에 저장해주면 됩니다.
        case "F" :
            position[0] += dx[direction]; 
            position[1] += dy[direction]; 
            break;
    }
}

console.log(position.join(" "));