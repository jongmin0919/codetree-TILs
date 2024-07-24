const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let first = input[0]
let second = input[1]

function sameOrNot(first, second) {

  if(first == second){
     console.log("Yes")
     return;
  } 

  let length = first.length;

  for(let i = 1 ; i <= length ; i++){
    first = first[length-1] + first.substring(0,length-1);
    if(first == second) {
        console.log("Yes")
        return;
    }
  }
  console.log("No")
}

sameOrNot(first, second);