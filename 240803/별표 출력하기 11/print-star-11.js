const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let str = "";

for (let i = 0; i < input*2+1; i++) {
    str = "";
    for (let j = 0; j <= input*4 + 1; j++) {

        if ((i%2 === 0 && j%2 === 0) || j%(input + 1) === 0) {
            str += "*";
        }
        else {
            str += " ";
        }
    }
    console.log(str);
}