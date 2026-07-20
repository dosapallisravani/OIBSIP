
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

        if (display.value === "") return;

        firstNumber = display.value;
        operator = button.dataset.value;
        resetDisplay = true;

    });

});
equalBtn.addEventListener("click", () => {

    if (firstNumber === "" || operator === "" || display.value === "") return;

    let secondNumber = Number(display.value);
    let first = Number(firstNumber);

    let result;

    switch (operator) {
        case "+":
            result = first + secondNumber;
            break;
        case "-":
            result = first - secondNumber;
            break;
        case "*":
            result = first * secondNumber;
            break;
        case "/":
            result = secondNumber === 0 ? "Error" : first / secondNumber;
            break;
        case "%":
            result = first % secondNumber;
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
