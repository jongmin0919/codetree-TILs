const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();

class weatherInfo{
    constructor(date, week, weather){
        this.date = date;
        this.week = week;
        this.weather = weather;
    };

    printInfo(){
        console.log(`${this.date} ${this.week} ${this.weather}`);
    };
};

let group = [];

input.forEach(info => {
    group.push(new weatherInfo(...info.split(" ")));
})

group.filter(info => info.weather === "Rain").sort((a,b) => {
    if(a.weather < b.weather) return 1
    else if (a.weather> b.weather) return -1
    else return 0
})[0].printInfo();