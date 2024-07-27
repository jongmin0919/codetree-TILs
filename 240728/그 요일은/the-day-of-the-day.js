const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let [m1, d1, m2, d2] = input[0].split(" ").map(Number);
const week = input[1].trim(); // 찾고자 하는 요일

const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// 날짜 범위 내 요일 계산을 위한 초기 설정
let dayIndex = 0;
let passedTime = 0;

// 날짜 계산
while (true) {
    if (m1 === m2 && d1 === d2) break;

    d1++;
    passedTime++;

    if (d1 > num_of_days[m1]) {
        m1++;
        d1 = 1;
    }
}

// 시작 날짜의 요일 인덱스를 계산
dayIndex = (passedTime % 7 + 7) % 7;

// 요일의 발생 횟수 계산
let weekCount = 0;

for (let i = 0; i <= passedTime; i++) {
    if (day_of_week[i % 7] === week) weekCount++;
}

console.log(weekCount);