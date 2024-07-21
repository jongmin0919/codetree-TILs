const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(" ").map(Number);

let minPrice = arr[0]; 
let maxProfit = 0; 

for (let i = 1; i < arr.length; i++) {
    const currentPrice = arr[i];
    
    // 현재 가격에서 최소 가격을 뺀 이익을 계산하고
    const profit = currentPrice - minPrice;
    
    // 현재 이윤이 최대 이윤보다 높을 경우 갈아 치움
    if (profit > maxProfit) {
        maxProfit = profit;
    }
    
    /* 현재 가격이 최소 가격보다 낮은 경우, 
    그러니까 가장 낮은 최소 가격에서 현재 가격을 뺐을 때 최대 이윤을 얻어야 하니까 
    최소 가격을 최대한 작게 정해야함
    */
    if (currentPrice < minPrice) {
        minPrice = currentPrice;
    }
}

console.log(maxProfit);