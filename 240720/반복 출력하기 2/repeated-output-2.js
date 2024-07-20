const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function repeatHello(n) {
    if (n <= 0) {
        return;
    }
    repeatHello(n - 1);
    console.log("HelloWorld");
}

repeatHello(input);