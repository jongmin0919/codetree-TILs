const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let first = input.shift().split(" ");
let word = first[0]
const ask = parseInt(first[1])
const length = word.length;

for(let i = 0 ; i < ask ;i++){
    let order = Number(input[i])
    switch(order){
        case 1:
        word = word.slice(1) + word.slice(0,1)
        console.log(word)
        break;
        case 2:
        word = word.slice(length - 1) + word.slice(0, length - 1)
        console.log(word)
        break;
        case 3:
        let reversed = "";
        for(let i = length - 1 ; i >= 0 ; i--){
            reversed += word[i]
        }
        word = reversed;
        console.log(word)
        break;
    }
}