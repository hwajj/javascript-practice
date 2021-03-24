let array = [];

let ARRAY_SIZE = 45;
let LOTTO_SIZE = 6;
for (let i = 1; i <= ARRAY_SIZE; i++) {
    array.push(i);
}

console.log(array);

let result = [];



console.log(result);


for (let i= 0; i < LOTTO_SIZE; i++) {
    var index = Math.floor(Math.random()*array.length);
    var num = array[index];
    console.log(num);
    array.splice(index,1);
    result.push(num);
    console.log(array);

    
}


result.sort(function(a,b){
    return a - b;
});

for (let i= 0; i < result.length; i++) {
    document.write('<span class = "ball">' + result[i] + '</span>');

    
}


console.log(result);
