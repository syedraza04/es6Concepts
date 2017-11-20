function isEqualTo(number = 1, param2){

    console.log("Number: ",number);
    console.log("Param2: ",param2);

    return number == param2;
}

console.log(isEqualTo(2));

function isEqualTo2(number = 1, param2 = number){

    console.log("Number: ",number);
    console.log("Param2: ",param2);

    return number == param2;
}

console.log(isEqualTo2(2));

