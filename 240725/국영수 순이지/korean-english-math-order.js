const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let length = parseInt(input.shift());
let arr = input;

class Student {
    constructor(name, kor, eng, mat) {
        this.name = name;
        this.kor = parseInt(kor);
        this.eng = parseInt(eng);
        this.mat = parseInt(mat);
    }

    printInfo() {
        console.log(`${this.name} ${this.kor} ${this.eng} ${this.mat}`);
    }
}

const studentArr = [];

arr.forEach(st => {
    studentArr.push(new Student(...st.split(" ")));
});

studentArr.sort((a, b) => {
    if (a.kor !== b.kor) return b.kor - a.kor; 
    else if (a.eng !== b.eng) return b.eng - a.eng; 
    else return b.mat - a.mat; 
    }
);

studentArr.forEach(student => student.printInfo());