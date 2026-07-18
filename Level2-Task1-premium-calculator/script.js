
// =========================
// NOVACALC WORKING SCRIPT
// =========================

const display = document.getElementById("display");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");


let firstNumber = "";
let operator = "";
let resetDisplay = false;


// Numbers

numbers.forEach(btn => {

    btn.addEventListener("click", () => {

        if(resetDisplay){
            display.value = "";
            resetDisplay = false;
        }

        display.value += btn.dataset.value;

    });

});


// Operators

operators.forEach(btn => {

    btn.addEventListener("click", () => {

        if(display.value === "") return;

        firstNumber = display.value;

        operator = btn.dataset.value;

        resetDisplay = true;

    });

});


// Equal

equalBtn.addEventListener("click", () => {

    if(firstNumber === "" || operator === "") return;


    let secondNumber = display.value;

    let a = Number(firstNumber);
    let b = Number(secondNumber);

    let result;


    switch(operator){

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
            result = b === 0 ? "Error" : a / b;
            break;

        case "%":
            result = a % b;
            break;

    }


    display.value = result;


    firstNumber = "";
    operator = "";
    resetDisplay = true;


});


// Clear

clearBtn.addEventListener("click",()=>{

    display.value="";

    firstNumber="";
    operator="";
    resetDisplay=false;

});


// Delete

deleteBtn.addEventListener("click",()=>{

    display.value = display.value.slice(0,-1);

});
