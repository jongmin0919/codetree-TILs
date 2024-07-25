const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

class Student {
    
    constructor(name, height, weight) {
        this.name = name;
        this.height = parseInt(height);
        this.weight = parseFloat(weight).toFixed(1);
    }

    printInfo(){
        console.log(`${this.name} ${this.height} ${this.weight}`)
    }
}

const studentArr = [];

input.forEach(st => {
    studentArr.push(new Student(...st.split(" ")));
});

function sortAndPrint(students){

    function sortByName(){
        students.sort((a, b) => {
            if(a.name < b.name) return -1;
            else if(a.name > b.name) return 1;
            else return 0;
        }); 
    }

    function sortByHeight(){
        students.sort((a, b) => {
            if(a.height !== b.height) return b.height - a.height
        }); 
    }

    sortByName();
    console.log("name");
    students.forEach(student => student.printInfo());

    sortByHeight();
    console.log();
    console.log("height");
    students.forEach(student => student.printInfo());
}

sortAndPrint(studentArr);