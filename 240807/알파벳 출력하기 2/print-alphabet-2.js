const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let charCode = 65;
if (input === 1) {
    console.log('A');
} else {
    for (let i = input; i > 0; i--) {
        let str = "";
        for (let j = 0; j < input - i; j++) {
            str += "  "; // 두 칸 공백 추가
        }
        for (let k = 0; k < i; k++) {
            if (charCode === 91) charCode = 65; // 'Z' 다음에 다시 'A'로
            str += String.fromCharCode(charCode) + (k < i - 1 ? " " : ""); 
            charCode++;
        }
        console.log(str);
    }
}