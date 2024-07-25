const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

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
    if(a.height !== b.height) return a.height - b.height
    else if(a.weight !== b.weight) return b.weight - a.weight;
    });

studentArr.forEach(student => student.printInfo());