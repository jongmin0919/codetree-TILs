const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
let [firstM, firstD, secondM, secondD] = input;

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let accTime = 1;

while (true) {
    if (firstM === secondM && firstD === secondD) break;

    firstD++;
    accTime++;

    if (firstD > num_of_days[firstM]) {
        firstM++;
        firstD = 1;
    }
}

console.log(accTime);