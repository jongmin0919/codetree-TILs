const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");


class meetingPlace{
    constructor(code, point, time){
        this.code = code;
        this.point = point;
        this.time = time;
    };

    printInfo(){
        console.log(`secret code : ${this.code}`)
        console.log(`meeting point : ${this.point}`)
        console.log(`time : ${this.time}`)
    }
};

let place1 = new meetingPlace(...input)
place1.printInfo();