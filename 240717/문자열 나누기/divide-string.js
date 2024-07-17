const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [length, letter] = [parseInt(input[0]), input[1].split(" ").join("")]

for(let i = 0 ; i < letter.length ; i+=5){
    console.log(letter.slice(i, i+5))
}