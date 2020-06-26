// function call () {
//   console.log("Вы вызвали функцию");
  
// }

// call();


// let call = function () {
//   console.log("Вы вызвали функцию");
// };

// call();

// let call = (text) => {
//   console.log(text);
  
// };
// console.log(call("Вы вызвали функцию"));

let a = +prompt("Введите число: ", "");
let b = +prompt("Введите 2 число: ", "");
let whatDo = prompt("Выберите действие(+, -, *, /)");

if (whatDo == "+") {
    console.log(calcSum(a, b));
} else if (whatDo == "-") {
    console.log(calcMin(a, b));
} else if (whatDo == "*") {
    console.log(multiply(a, b));
} else if  (whatDo == "/") {
  console.log(split(a, b));
} else {
  console.log("Ошибка");
  
}

function calcSum (a, b) {
  return (a + b);
}

function calcMin (a, b) {
  return(a - b);
}

function multiply (a, b) {
  return(a * b);
}

function split (a, b) {
  return(a / b);
}

let c = 4;
const addX = x => n => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);
