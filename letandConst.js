let name = 'ali';
console.log(name);

//block scoping with "let" keyword

//let

if (true){
    let age=27;
    console.log("Inside If block: ",age);  // runs fine
}

console.log("Outside If block: ",age); // gives reference error

//const

//constant number gives an error when u try to assign new value to it
const age=27;
// age= 28;//gives an error
console.log("Inside If block: ",age);  // runs fine


//constant array gives no error when we try to push new values to it
// the reason is that arrays are reference types so when we assign them
//to some variable, only the pointer of the array gets copied not the original
// array so when we only change the values to where the pointer points not
//the pointer itself thats why array.push works

const numArray = [1,2,55,6];
numArray.push(12);
console.log(numArray);

//similarly for object

const OBJ = {
    age:27
};

console.log(OBJ);
OBJ.age = 30;
console.log(OBJ);