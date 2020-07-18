"use strict";
let buttom = document.getElementById('button-text');
let text = document.getElementById('text');

const click =  function (event) {
  const target = event.target;
  if (target) {
    document.cssText = "background: black;";
    text.cssText = "font-size: 14px; color: white; background-color: yellow;";
    buttom.style.cssText = "background-color: red; padding: 15px; font-size: 15px;border: 1px solid black;";
  } else {
    buttom.style.cssText = null;
  }
};

buttom.addEventListener('click', click);
/*
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

*/

// let obj = {
//   name: 'Row',
//   sirname: 'Nope',
//   color: {
//     bg: 'red',
//     border: 'black'
//   }
// };

// for(let key in obj) {
//   if (typeof(obj[key]) === 'object'){
//     for (let i in obj[key]) {
//       console.log(`Вывести ${i} и второе значение: ${obj[key][i]}`);
//     }
//   } else {
//     console.log(`Вывести ${key} и второе значение: ${obj[key]}`);
//   }
  
// }
// console.log(Object.keys(obj).length);


// Object.defineProperty(obj, "name", {
//   writable: false,
//   enumerable: true,
//   configurable: false
// });

// obj.name = "Petya";

// let descriptor = Object.getOwnPropertyDescriptor(obj, 'name', 'color');
// console.log(descriptor);

// деструктизация 
// let {name = 0, color:{bg = '#060606', border = 'blue'}, sirname : sir = 'Lostly', title = 'Non'} = obj;
// console.log(name);
// console.log(sir);
// console.log(bg);
// console.log(border);
// console.log(title);



// let user = {
//   name: "John"
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert( JSON.stringify(descriptor, null, 2 ) );