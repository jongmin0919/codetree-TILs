const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let arr2d = Array.from({length : input}, () => Array(input).fill(0));

let acc = 0;
for(let i = 0 ; i < input ; i++){
    if(i%2 === 0)   {
        for(let j = 0 ; j < input ; j++){
            arr2d[i][j] = ++acc;
        }
    }else{
        for(let j = 0 ; j < input ; j++){
            arr2d[i][j] = acc += 2;
        }
    }
}

for(let arr1d of arr2d){
    let line = "";
    for(let item of arr1d){
        line += item + " ";
    }
    console.log(line.trim());
}