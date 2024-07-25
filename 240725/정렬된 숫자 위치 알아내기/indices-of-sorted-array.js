const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let [length, arr] = [input.shift(), input]
arr = arr[0].split(" ").map(Number);

class Num{
    static num = 1;
    constructor(name){
        this.name = name;
        this.num = Num.num++;
    }
}

let originalArr = [];
let sortedArr = [];

arr.forEach(item => {
    originalArr.push(new Num(item))
})
Num.num = 1;
arr.sort((a,b) => {
    return a - b
}).forEach(item => {
    sortedArr.push(new Num(item))
})

for(let i = 0 ; i < originalArr.length ; i++){
    for(let j = 0 ; j < originalArr.length ; j++){
        if(originalArr[i].name === sortedArr[j].name){
            originalArr[i].num = sortedArr[j].num
            sortedArr.splice(j,1);
            break;
        }
    }
}

const result = originalArr.map(item => item.num)
console.log(result.join(" "));