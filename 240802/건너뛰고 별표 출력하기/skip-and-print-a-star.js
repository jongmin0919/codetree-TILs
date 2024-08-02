const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input, 10);

for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
    console.log(" ");
}
for (let i = n - 1; i > 0; i--) {
    console.log('*'.repeat(i));
    console.log(" ");
}