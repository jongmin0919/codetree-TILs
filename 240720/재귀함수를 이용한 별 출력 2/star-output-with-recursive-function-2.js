const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function printRepeatStar(n){

    let star = "";
    let reverseStar = ""
    function repeatStar(n) {
        if (n <= 0) {
            return;
        }
        for(let i = 0 ; i < n ; i++){
           star += "* " 
        }
        console.log(star)
        star = "";
        repeatStar(n - 1);
        
        for(let i = 0 ; i < n ; i++){
           reverseStar += "* " 
        }
        console.log(reverseStar)
        reverseStar = "";
    }

    repeatStar(n)
}

printRepeatStar(input);