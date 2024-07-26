const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

class agentInfo{
    constructor(level, score){
        this.level = level;
        this.score = score;
    };

    printInfo(){
        console.log(`${this.level} ${this.score}`)
    };
};

let group = [];
input.forEach(agent => {
    group.push(new agentInfo(...agent.split(" ")))
})

group.sort((a,b) => a.score - b.score);
group[0].printInfo();