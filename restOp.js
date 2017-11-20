/**
 * Created by syedraza on 11/20/17.
 */


//rest operator converts list of arguments into an array of arguments

function sumUp(...num) {
    console.log(num);
}
sumUp(10,20,30);

//spread operator converts array or numbers into lists

let numbers = [1,2,3,4,5];
console.log(...numbers);

for (let number of numbers){
    console.log(number)
}