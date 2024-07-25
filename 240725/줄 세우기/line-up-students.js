const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let length = parseInt(input.shift());
let arr = input;

class Student {
    static num = 1;

    constructor(height, weight) {
        this.height = parseInt(height);
        this.weight = parseInt(weight);
        this.num = Student.num++;
    }

    printInfo(){
        console.log(`${this.height} ${this.weight} ${this.num}`)
    }
}

const studentArr = [];

arr.forEach(st => {
    studentArr.push(new Student(...st.split(" ")));
});

studentArr.sort((a, b) => {
    if(a.height !== b.height) return b.height - a.height
    else if(a.height === b.height && a.weight !== b.weight) return b.weight - a.weight;
    else if(a.num !== b.num) return a.num - b.num;
    });

studentArr.forEach(student => student.printInfo());