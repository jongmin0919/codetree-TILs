const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let star = "";
function repeatHello(n) {
    if (n <= 0) {
        return;
    }
    repeatHello(n - 1);
    console.log(star += "*");
}

repeatHello(input);