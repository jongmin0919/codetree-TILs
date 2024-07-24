const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// nums를 정렬합니다.
nums.sort((a, b) => a - b);

let group_max = 0;
for (let i = 0; i < n; i++) {
    // i번째와 2n - 1 - i번째 원소를 매칭합니다.
    const group_sum = nums[i] + nums[2 * n - 1 - i];
    if (group_sum > group_max) {
        // 최댓값을 갱신합니다.
        group_max = group_sum;
    }
}

console.log(group_max);