const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function printRepeat(n){

    let str = "";
    function repeatStr(n) {
        if (n <= 0) {
            return;
        }
        str += n + " ";
        repeatStr(n - 1);
        str += n + " ";
    }
    repeatStr(n)
    console.log(str.trim());
}

printRepeat(input);