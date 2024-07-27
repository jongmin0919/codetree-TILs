const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("").map(Number);

function convertToDecimal(n){
    
    result = 0;
    for (let i = 0; i < n.length; i++) {
        result = result * 2 + n[i];
    }
    console.log(result)
}

convertToDecimal(input);