// =========================
// NOVACALC SCRIPT
// =========================

const display = document.getElementById("display");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");


let firstNumber = null;
let operator = null;
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
operators.forEach(button => {

    button.addEventListener("click", () => {

        console.log("Operator clicked:", button.dataset.value);

        if (display.value === "") return;

        firstNumber = Number(display.value);
        operator = button.dataset.value;
        resetDisplay = true;

    });

});


// Equal

equalBtn.addEventListener("click", () => {


    if(firstNumber === null || operator === null || display.value === "")
    {
        return;
    }


    let secondNumber = Number(display.value);

    let result;



    switch(operator){


        case "+":
            result = firstNumber + secondNumber;
            break;


        case "-":
            result = firstNumber - secondNumber;
            break;


        case "*":
            result = firstNumber * secondNumber;
            break;


        case "/":

            if(secondNumber === 0){

                result = "Error";

            }
            else{

                result = firstNumber / secondNumber;

            }

            break;


        case "%":
            result = firstNumber % secondNumber;
            break;


    }



    display.value = result;


    firstNumber = null;

    operator = null;

    resetDisplay = true;


});



// Clear

clearBtn.addEventListener("click",()=>{


    display.value = "";

    firstNumber = null;

    operator = null;

    resetDisplay = false;


});




// Delete

deleteBtn.addEventListener("click",()=>{


    display.value = display.value.slice(0,-1);


});
