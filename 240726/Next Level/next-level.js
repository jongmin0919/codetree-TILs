const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");


class userInfo{
    constructor(id, level){
        this.id = id;
        this.level = level;
    };

    printInfo(){
        console.log(`user ${this.id} lv ${this.level}`)
    };
};

let user1 = new userInfo("codetree", 10);
let user2 = new userInfo(...input);
user1.printInfo();
user2.printInfo();