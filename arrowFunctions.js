const func = () => {
    "use strict";
    console.log(this);
};
func();

const func2 = () => "hello";
console.log(func2());

const func3 = a => a+8;
console.log(func3(8));

setTimeout(() => console.log('Hello after 1 second'), 1000);

let div = document.getElementsByTagName('div');
console.log(div);
for(let i =0 ; i<div.length ; i++){
    div[i].addEventListener('click',clickedDiv);
}

function clickedDiv () {
    "use strict";
    console.log(this.innerText);
}