const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();

class userInfo{
    constructor(name, address, localArea){
        this.name = name;
        this.address = address;
        this.localArea = localArea;
    };

    printInfo(){
        console.log(`name ${this.name}`)
        console.log(`addr ${this.address}`)
        console.log(`city ${this.localArea}`)
    };
};

let group = [];

input.forEach(people => {
    group.push(new userInfo(...people.split(" ")));
})

group.sort((a,b) => {
    if(b.name > a.name) return 1
    else if(b.name < a.name) return -1
    else return 0
})[0].printInfo();