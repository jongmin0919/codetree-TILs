const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [lines, orderArr] = [input.shift(), input.map(arr => arr.split(" "))];

let min = Infinity;
let max = -Infinity;
let num = 0;

// Determine the range of positions
orderArr.forEach(order => {
    let temp = 0;
    if (order[1] === 'R') temp = parseInt(order[0]);
    else temp = -(parseInt(order[0]));
    num += temp;
    if (num < min) min = num;
    if (num > max) max = num;
});

// Create arrays to track colors and counts
const rangeSize = max - min + 1;
const accumulator = Array(rangeSize).fill(0);
const blackArr = Array(rangeSize).fill(0);
const whiteArr = Array(rangeSize).fill(0);
const colorArr = Array(rangeSize).fill('');

// Helper function to get the correct index in the array
const getIndex = (position) => position + Math.abs(min);

let position = -min;

for (let order of orderArr) {
    const distance = parseInt(order[0]);
    const direction = order[1];

    if (direction === 'R') {
        for (let i = 0; i < distance; i++) {
            const index = getIndex(position + i);
            accumulator[index]++;
            blackArr[index]++;
            
            if (accumulator[index] >= 4 && blackArr[index] - whiteArr[index] >= 2) {
                colorArr[index] = 'B';
            } else if (accumulator[index] >= 4) {
                colorArr[index] = 'G';
            } else if (blackArr[index] > 0) {
                colorArr[index] = 'B';
            }
        }
        position += distance - 1; // Update position to the end of the current command
    } else if (direction === 'L') {
        for (let i = 0; i < distance; i++) {
            const index = getIndex(position - i);
            accumulator[index]++;
            whiteArr[index]++;
            
            if (accumulator[index] >= 4 && whiteArr[index] - blackArr[index] >= 2) {
                colorArr[index] = 'W';
            } else if (accumulator[index] >= 4) {
                colorArr[index] = 'G';
            } else if (whiteArr[index] > 0) {
                colorArr[index] = 'W';
            }
        }
        position -= distance - 1; // Update position to the end of the current command
    }
}

// Count the colors
let whiteCount = 0;
let blackCount = 0;
let grayCount = 0;

colorArr.forEach(color => {
    if (color === 'W') {
        whiteCount++;
    } else if (color === 'B') {
        blackCount++;
    } else if (color === 'G') {
        grayCount++;
    }
});

// Output the result
console.log(`${whiteCount} ${blackCount} ${grayCount}`);