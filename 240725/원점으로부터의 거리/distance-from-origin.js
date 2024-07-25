const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const length = input.shift();
let arr = [...input]

class Coordinate{

    static num = 1

    constructor(x, y){
        this.x = x
        this.y = y
        this.distance = Math.pow(this.x,2) + Math.pow(this.y,2);
        this.num = Coordinate.num++;
    }
}

arr.map(coor => new Coordinate(...coor.split(" "))).sort((a, b) => {
    return a.distance - b.distance
}).forEach(item => console.log(item.num));