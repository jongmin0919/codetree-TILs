const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const length = parseInt(input[0]); 
const orders = input.slice(1);

let arr = [];

for (let i = 0; i < length; i++) {
    let order = orders[i].split(" ");
    
    switch (order[0]) {
        case "push_back":
            arr[arr.length] = parseInt(order[1]); 
            break;
        case "pop_back":
            if (arr.length > 0) arr.length--; 
            break;
        case "size":
            console.log(arr.length); 
            break;
        case "get":
            const k = parseInt(order[1]);
            if (k >= 0 && k <= arr.length) { 
                console.log(arr[k - 1]); 
            }
            break;
        default:
            break;
    }
}