// =========================
// NOVACALC SCRIPT
// =========================

const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let waitingForSecondNumber = false;

// =========================
// NUMBER BUTTONS
// =========================

numberButtons.forEach(button => {

button.addEventListener("click", () => {

const value = button.dataset.value;

if(waitingForSecondNumber){

display.value = "";

waitingForSecondNumber = false;

}

if(value==="." && display.value.includes(".")) return;

display.value += value;

});

});

// =========================
// OPERATOR BUTTONS
// =========================

operatorButtons.forEach(button=>{

button.addEventListener("click",()=>{

if(display.value==="") return;

if(firstNumber!=="" && !waitingForSecondNumber){

calculate();

}

firstNumber = display.value;

currentOperator = button.dataset.value;

waitingForSecondNumber = true;

});

});

// =========================
// CALCULATE
// =========================

equalButton.addEventListener("click",calculate);

function calculate(){

if(firstNumber==="" || currentOperator==="") return;

secondNumber = display.value;

let a = parseFloat(firstNumber);

let b = parseFloat(secondNumber);

let result = 0;

switch(currentOperator){

case "+":
result = a + b;
break;

case "-":
result = a - b;
break;

case "*":
result = a * b;
break;

case "/":

if(b===0){

display.value="Error";

resetCalculator();

return;

}

result = a / b;
break;

case "%":

result = a % b;
break;

}

display.value = Number(result.toFixed(6));

firstNumber = display.value;

currentOperator = "";

waitingForSecondNumber = true;

}

// =========================
// CLEAR
// =========================

clearButton.addEventListener("click",()=>{

display.value="";

resetCalculator();

});

// =========================
// DELETE
// =========================

deleteButton.addEventListener("click",()=>{

if(waitingForSecondNumber) return;

display.value = display.value.slice(0,-1);

});

// =========================
// RESET
// =========================

function resetCalculator(){

firstNumber="";

secondNumber="";

currentOperator="";

waitingForSecondNumber=false;

}

// =========================
// KEYBOARD SUPPORT
// =========================

document.addEventListener("keydown",(e)=>{

const key = e.key;

if(!isNaN(key) || key==="."){

document.querySelector(`[data-value="${key}"]`)?.click();

}

if(["+","-","*","/","%"].includes(key)){

document.querySelector(`.operator[data-value="${key}"]`)?.click();

}

if(key==="Enter"){

e.preventDefault();

equalButton.click();

}

if(key==="Backspace"){

deleteButton.click();

}

if(key==="Escape"){

clearButton.click();

}

});
