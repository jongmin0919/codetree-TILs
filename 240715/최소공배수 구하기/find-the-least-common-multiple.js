const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input = input[0].split(" ");
const n = input[0];
const m = input[1];

function solution(n, m) {
       
    function lcd(n,m){ // 앞에서 설명 드린 내용대로 테스트 케이스는 n(작은 값)과 m(큰 값) 으로 입력되기 때문에 최소공약수를 구하는 공식에서는 큰 값을 작은 값으로 나누는 나머지를 구해야 하니 m과 n의 위치를 스위칭 시켜줬습니다.
        while(n !== 0){
            tmp = m%n; 
            m = n; 
            n = tmp 
            };
        return m; // 앞서 말씀드린 것처럼 나머지(tmp)가 0이 될때 b(여기서는 m)는 최소공약수가, n에는 결과값(0)이 저장되기 때문에 m을 반환해줍니다.
    };
    
    function lcm(n,m){
        return (n*m) / lcd(n,m); // 최소공배수는 앞서 설명한 것처럼 주어진 두 수의 곲을 두 수의 최대공약수로 나눈 결과값이므로 다음 표현식의 결과를 리턴해 줍니다.
    };
    return lcm(n,m);
}

console.log(solution(n,m));