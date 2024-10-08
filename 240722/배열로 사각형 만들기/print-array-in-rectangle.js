let arr2d = Array.from({ length: 5 }, () => Array(5).fill(0));

function printArr(arr){
    for (let row of arr) {
        let str = "";
        for (let elem of row) {
            str += elem + " ";
        }
        console.log(str);
    }
}

let num = 1;
for(let i = 0 ; i < 5 ; i++){
    for(let j = 0 ; j < 5 ; j++){
        if(i == 0 || j == 0) arr2d[i][j] = 1
        else arr2d[i][j] = arr2d[i-1][j] + arr2d[i][j-1]
    }
}

printArr(arr2d)