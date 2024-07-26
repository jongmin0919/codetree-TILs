const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();

class weatherInfo {
    constructor(date, week, weather) {
        this.date = date;
        this.week = week;
        this.weather = weather;
    }

    printInfo() {
        console.log(`${this.date} ${this.week} ${this.weather}`);
    }
}

let group = [];

for (let i = 0; i < input.length; i++) {
    let info = input[i];
    let convertedInfo = info.split(" ");
    let year = parseInt(convertedInfo[0].split("-")[0]);
    if (year < 2000 || year > 2100) continue;
    group.push(new weatherInfo(...convertedInfo));
}

group.filter(info => info.weather === "Rain").sort((a, b) => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return dateA - dateB; 
})[0].printInfo();