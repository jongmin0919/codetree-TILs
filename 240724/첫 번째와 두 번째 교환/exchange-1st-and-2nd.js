const fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim();

let [first, second] = [str[0], str[1]]

str = str.split("");

str = (str.map(letter => {
    if (letter === first) return second;
    else if (letter === second) return first;
    else return letter;
})).join("");

console.log(str)