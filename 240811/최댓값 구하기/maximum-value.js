const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let max = a;


if (b > max) {
    max = b;
}


if (c > max) {
    max = c;
}

console.log(max);