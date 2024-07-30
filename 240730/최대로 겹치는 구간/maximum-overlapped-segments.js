const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// Read length and initialize
const length = Number(input.shift());

// Initialize the array with a size that covers the maximum endPoint
let maxRange = 0;
const ranges = [];

for (let i = 0; i < length; i++) {
    const [startPoint, endPoint] = input[i].split(" ").map(Number);
    ranges.push({ startPoint, endPoint });
    if (endPoint > maxRange) {
        maxRange = endPoint;
    }
}

const arr = Array.from({ length: maxRange }, () => 0);


for (const { startPoint, endPoint } of ranges) {
    for (let i = startPoint - 1; i < endPoint - 1 ; i++) {
        arr[i]++;
    }
}

console.log(arr.sort((a,b) => b-a)[0]);