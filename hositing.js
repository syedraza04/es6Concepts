/**
 * Created by syedraza on 11/20/17.
 */
"use strict";

//this runs

ages = 27;
console.log(ages);
var ages;

//this gives an error so hoisting does not work
//declare functions before using them

age = 27;
console.log(age);
let age;



function doSmith() {
    age2 = 27;
}
let age2;
doSmith();
console.log(age);
