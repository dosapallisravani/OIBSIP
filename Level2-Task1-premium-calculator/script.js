
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

        firstNumber = Number(display.value);
        operator = btn.dataset.value;

        resetDisplay = true;

    });

});


// Equal

equalBtn.addEventListener("click",()=>{

    let secondNumber = Number(display.value);

    let result;


    if(operator === "+"){
        result = firstNumber + secondNumber;
    }

    else if(operator === "-"){
        result = firstNumber - secondNumber;
    }

    else if(operator === "*"){
        result = firstNumber * secondNumber;
    }

    else if(operator === "/"){
        result = secondNumber === 0 ? "Error" : firstNumber / secondNumber;
    }

    else if(operator === "%"){
        result = firstNumber % secondNumber;
    }


    display.value = result;

});


// Clear

clearBtn.addEventListener("click",()=>{

    display.value="";
    firstNumber="";
    operator="";

});


// Delete

deleteBtn.addEventListener("click",()=>{

    display.value = display.value.slice(0,-1);

});
