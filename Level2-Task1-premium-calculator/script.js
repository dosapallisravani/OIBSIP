
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


// =========================
// OPERATOR BUTTONS
// =========================

operators.forEach(button => {

    button.addEventListener("click", () => {

        if(display.value === "") return;

        firstNumber = display.value;

        operator = button.getAttribute("data-value");

        display.value = "";

    });

});
equalBtn.addEventListener("click", () => {

    if(firstNumber === "" || operator === "") return;


    let secondNumber = display.value;

    let result;


    switch(operator){

        case "+":
            result = Number(firstNumber) + Number(secondNumber);
            break;

        case "-":
            result = Number(firstNumber) - Number(secondNumber);
            break;

        case "*":
            result = Number(firstNumber) * Number(secondNumber);
            break;

        case "/":
            result = Number(firstNumber) / Number(secondNumber);
            break;

        case "%":
            result = Number(firstNumber) % Number(secondNumber);
            break;

    }


    display.value = result;

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
