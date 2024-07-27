const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
let [m1, d1, m2, d2] = input;

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let passedTime = 0;

let state = true;
if (m2 < m1 || (m2 === m1 && d2 < d1)) {
    state = false;
    while (true) {
        if (m1 === m2 && d1 === d2) break;

        d1--;
        passedTime++;

        if (d1 === 0) {
            m1--;
            d1 = num_of_days[m1];
        }
    }
    // 음수 차이를 올바르게 처리
    passedTime = -passedTime;
} else {
    // 순방향인 경우
    while (true) {
        if (m1 === m2 && d1 === d2) break;

        d1++;
        passedTime++;

        if (d1 > num_of_days[m1]) {
            m1++;
            d1 = 1;
        }
    }
}

let dayIndex = passedTime % 7;
if(!state){
    dayIndex = (passedTime % 7 + 7) % 7;
}

console.log(day_of_week[dayIndex]);