const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let [length, arr] =  [parseInt(input.shift()), input]



class Student{
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    printInfo(){
        console.log(`${this.name} ${this.height} ${this.weight}`)
    }
}

const studentArr = []

arr.forEach((st, i, arr) => {
    studentArr.push(new Student(...st.split(" ")))
    studentArr.sort((a, b) => a.height - b.height)
})

studentArr.forEach((st) => {
    st.printInfo();
})