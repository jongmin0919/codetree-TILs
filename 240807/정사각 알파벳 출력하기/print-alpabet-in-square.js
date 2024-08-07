const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let charCode = 65;
if(input  === 1){
    console.log('A')
}else{
    for(let i = 0 ; i < input ; i++){
        let str = "";
        for(let j = 0 ; j < input ; j++){
            str += String.fromCharCode(charCode)
            charCode++;
        }
    console.log(str)
    }
}