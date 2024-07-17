const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [letterA, letterB] = [input[0], input[1]];

let result = -1;
for (let i = 0; i < letterA.length; i++) {
    if (letterA[i] === letterB[0]) {
        let flag = true;
        for (let j = 0; j < letterB.length; j++) {
            if (letterA[i + j] !== letterB[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result = i;
            break;
        }
    }
}

console.log(result);