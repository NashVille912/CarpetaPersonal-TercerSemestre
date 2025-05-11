"use strict";

let x = 10;
console.log(x);

function myFunction() {
  //"use strict";
  let y = 20;
  console.log(y);
}

myFunction(); // ReferenceError: y is not defined