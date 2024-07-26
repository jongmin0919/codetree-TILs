const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

class orderInfo{
    constructor(code, color, minutes){
        this.code = code;
        this.color = color;
        this.minutes = minutes;
    };

    printInfo(){
        console.log(`code : ${this.code}`)
        console.log(`color : ${this.color}`)
        console.log(`second : ${this.minutes}`)
    };
};


let order = new orderInfo(...input)
order.printInfo();