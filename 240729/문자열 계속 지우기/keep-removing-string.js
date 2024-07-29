const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let [word, part] = input;
word = word.split("")


while(true){
    let index = word.join("").indexOf(part);
    if (index === -1) break;
    word.splice(index, part.length);
}
console.log(word.join(""));