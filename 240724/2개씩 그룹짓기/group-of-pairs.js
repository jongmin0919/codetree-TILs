const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const length = parseInt(input[0]);
let group = input[1].split(" ").map(Number);

// 이분 탐색과 그리디 검사를 위한 함수 정의
function canFormGroups(nums, maxSum) {
    let used = new Array(nums.length).fill(false);

    function dfs(index, currentSum) {
        if (index === nums.length) {
            return true;
        }
        if (used[index]) {
            return dfs(index + 1, currentSum);
        }
        for (let i = index + 1; i < nums.length; i++) {
            if (!used[i] && currentSum + nums[i] <= maxSum) {
                used[i] = true;
                if (dfs(index + 1, currentSum + nums[i])) {
                    return true;
                }
                used[i] = false;
            }
        }
        return false;
    }
    
    return dfs(0, 0);
}

function minimizeMaxGroupSum(nums) {
    nums.sort((a, b) => a - b);
    let low = nums[nums.length - 1];
    let high = nums.reduce((acc, num) => acc + num, 0);
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (canFormGroups(nums, mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    
    return low;
}

// 실행 및 결과 출력
console.log(minimizeMaxGroupSum(group));