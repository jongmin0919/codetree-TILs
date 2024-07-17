const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let [arr, alphabet] = [input[0].split(""), input[1]];

let checker = false;
arr.forEach(alpha => {
    if(alpha === alphabet){
        checker = arr.indexOf(alpha)
    }
});

console.log(checker ? checker : "No");