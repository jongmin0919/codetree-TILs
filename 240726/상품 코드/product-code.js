const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

class orderInfo{
    constructor(name, code, ){
        this.name = name;
        this.code = code;
    };

    printInfo(){
        console.log(`product ${this.code} is ${this.name}`)
    };
};

let order1 = new orderInfo("codetree", 50)
let order2 = new orderInfo(...input)

order1.printInfo();
order2.printInfo();