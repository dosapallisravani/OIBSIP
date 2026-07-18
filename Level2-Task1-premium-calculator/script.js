// ======================
// SELECT ELEMENTS
// ======================

const display = document.getElementById("display");

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");

const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector(".backspace");
const equalBtn = document.querySelector(".equal");

// ======================
// VARIABLES
// ======================

let firstNumber = "";
let secondNumber = "";
let operator = "";
let waitingForSecond = false;

// ======================
// NUMBER BUTTONS
// ======================

numberBtns.forEach(btn => {

btn.addEventListener("click", () => {

const value = btn.textContent;

if(waitingForSecond){

display.value = "";
waitingForSecond = false;

}

if(value === "." && display.value.includes(".")) return;

display.value += value;

});

});

// ======================
// OPERATORS
// ======================

operatorBtns.forEach(btn => {

btn.addEventListener("click", () => {

if(display.value === "") return;

firstNumber = display.value;

operator = btn.textContent;

waitingForSecond = true;

});

});

// ======================
// CALCULATE
// ======================

equalBtn.addEventListener("click", () => {

if(firstNumber === "" || operator === "") return;

secondNumber = display.value;

let a = parseFloat(firstNumber);
let b = parseFloat(secondNumber);

let result;

switch(operator){

case "+":
result = a + b;
break;

case "-":
result = a - b;
break;

case "×":
result = a * b;
break;

case "÷":

if(b === 0){

display.value = "Error";
reset();
return;

}

result = a / b;
break;

case "%":
result = a % b;
break;

default:
return;

}

display.value = Number(result.toFixed(6));

firstNumber = "";
secondNumber = "";
operator = "";

});

// ======================
// CLEAR
// ======================

clearBtn.addEventListener("click", () => {

display.value = "";

reset();

});

// ======================
// BACKSPACE
// ======================

backspaceBtn.addEventListener("click", () => {

display.value = display.value.slice(0,-1);

});

// ======================
// RESET
// ======================

function reset(){

firstNumber = "";
secondNumber = "";
operator = "";
waitingForSecond = false;

}

// ======================
// KEYBOARD SUPPORT
// ======================

document.addEventListener("keydown", (e)=>{

const key = e.key;

if(!isNaN(key) || key === "."){

if(waitingForSecond){

display.value = "";
waitingForSecond = false;

}

if(key==="." && display.value.includes(".")) return;

display.value += key;

}

if(key==="+" || key==="-" || key==="*" || key==="/" || key==="%"){

firstNumber = display.value;

operator = key==="*" ? "×" :
key==="/" ? "÷" : key;

waitingForSecond = true;

}

if(key==="Enter"){

e.preventDefault();

equalBtn.click();

}

if(key==="Backspace"){

backspaceBtn.click();

}

if(key==="Escape"){

clearBtn.click();

}

});
