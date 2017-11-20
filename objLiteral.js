/**
 * Created by syedraza on 11/20/17.
 */

//object initialization;

let name = 'ali';
let age = 25;
let ageField = "age";

let obj = {
    name,
    age,
    greet () {
        console.log(this.name,this.age);
    }
};

//dynamically add property name

let obj2 = {
    name,
    [ageField]:28,
    greet () {
        console.log(this.name,this.age);
    }
};

(obj.greet());
console.log(obj2);