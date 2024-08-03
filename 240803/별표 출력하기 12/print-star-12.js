const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = 0; i < input; i++) {
    let str = "";
    if (i % 2 === 0) {
        for (let j = 0; j < input; j++) {
            str += "* ";
        }
    } else {
        for (let j = 0; j < Math.floor(input / 2); j++) {
            str += "  *";
        }
        if (input % 2 !== 0) {
            str += "  ";
        }
    }
    console.log(str.trimEnd());
}