const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = input.split(" ");
let n = parseInt(input[0])
let m = parseInt(input[1])

// 문제 해설 참조 https://velog.io/@re_go/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%84%A4%EB%AA%85-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4

function lcd(n,m){ 
        while(n !== 0){
            tmp = m%n; 
            m = n; 
            n = tmp 
            };
        return m; 
};

console.log(lcd(n,m));