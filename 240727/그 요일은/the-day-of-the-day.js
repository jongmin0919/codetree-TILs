const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let [m1, d1, m2, d2] = input[0].split(" ").map(Number);
const week = input[1].trim(); // 찾고자 하는 요일

const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day_of_week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function countDays(m1, d1, m2, d2) {
    let days = 0;
    while (m1 < m2 || (m1 === m2 && d1 <= d2)) {
        days++;
        d1++;
        if (d1 > num_of_days[m1]) {
            d1 = 1;
            m1++;
        }
    }
    return days;
}

let totalDays = countDays(m1, d1, m2, d2);

let startDay = 0;
let currentDayIndex = 0;

for (let i = 0; i < totalDays; i++) {
    if (day_of_week[currentDayIndex] === week) {
        startDay++;
    }
    currentDayIndex = (currentDayIndex + 1) % 7;
}

console.log(startDay);