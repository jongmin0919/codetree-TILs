const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let [m1, d1, m2, d2] = input[0].split(" ").map(Number);
const week = input[1].trim(); // 찾고자 하는 요일

const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day_of_week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let passedTime = 0;
let state = true;

// 날짜 계산
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
    passedTime = -passedTime;
} else {
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
if (!state) {
    dayIndex = (passedTime % 7 + 7) % 7; 
}

// 요일의 발생 횟수 계산
let weekCount = 0;

for (let i = 0; i <= Math.abs(passedTime); i++) {
    if (day_of_week[dayIndex % 7] === week) weekCount++;
    dayIndex++;
}

console.log(weekCount);