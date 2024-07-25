const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [length, arr] = [input.shift(), input]

class Student {
    
    constructor(name, height, weight) {
        this.name = name;
        this.height = parseInt(height);
        this.weight = parseInt(weight);
    }

    printInfo(){
        console.log(`${this.name} ${this.height} ${this.weight}`)
    }
}

const studentArr = [];

arr.forEach(st => {
    studentArr.push(new Student(...st.split(" ")));
});

studentArr.sort((a, b) => {
    if(a.height !== b.height) return a.height - b.height;
    else return b.weight - a.weight
}); 

studentArr.forEach(student => student.printInfo())