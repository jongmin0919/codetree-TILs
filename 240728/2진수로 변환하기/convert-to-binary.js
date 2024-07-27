const fs = require('fs')
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

function binaryConverter(n){
    let arr = [];
    while (true) {
        if (n < 2) {
            arr.push(n);
            break;
        }

        arr.push(n % 2);
        n = Math.floor(n / 2);
    }

    let result = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
    }
    console.log(result);
}

binaryConverter(input);