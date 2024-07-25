const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const length = parseInt(input.shift());
let arr = [...input];

class Coordinate {
    static num = 1;

    constructor(x, y) {
        this.x = Number(x);
        this.y = Number(y);
        this.distance = Math.abs(this.x) + Math.abs(this.y);
        this.num = Coordinate.num++;
    }
}

const coordinates = arr.map(coor => {
    const [x, y] = coor.split(" ").map(Number); // Ensure coordinates are numbers
    return new Coordinate(x, y);
});

coordinates.sort((a, b) => {
    if (a.distance !== b.distance) {
        return a.distance - b.distance;
    } else {
        return a.num - b.num; 
    }
});

coordinates.forEach(item => console.log(item.num));