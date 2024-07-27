const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const [goalD, goalH, goalM] = input;
let [startD, startH, startM] = [11, 11, 11];

let accMinutes = 0;

while (true) {
    // 일자가 앞서든지, 시간이 앞서든지, 분이 앞서든지 할 경우 -1를 반환
    if (startD > goalD || (startD === goalD && startH > goalH) 
    || (startD === goalD && startH === goalH && startM > goalM)) {
        accMinutes = -1;
        break;
    }
    
    if (startD === goalD && startH === goalH && startM === goalM) break;

    startM++;
    accMinutes++;

    if (startM === 60) {
        startH++;
        startM = 0;
    }

    if (startH === 24) {
        startD++;
        startH = 0;
    }
}

console.log(accMinutes);