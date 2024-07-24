const input = ['aba 2', '1 1 2', '2 a c'];

let firstLine = input.shift(); 
let [str, question] = firstLine.split(" ");
question = parseInt(question);
str = str.split("");

str = input.forEach(arr => {
    
    arr = arr.split(" ")
    if(parseInt(arr[0]) === 1){
        [str[arr[1]-1], str[arr[2]-1]] = [str[arr[2]-1], str[arr[1]-1]]
        console.log(str.join(""));
    }else if(parseInt(arr[0]) === 2){
        str = str.map(letter => {
            if(letter === arr[1]) return arr[2];
            else return letter;
        }).join("");
        console.log(str);
    }
})