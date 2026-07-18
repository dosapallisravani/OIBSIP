/*==========================
ELEMENTS
==========================*/

const display = document.getElementById("display");
const history = document.getElementById("history");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");

/*==========================
VARIABLES
==========================*/

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let shouldReset = false;

/*==========================
DISPLAY
==========================*/

function updateDisplay(value){
    display.value = value;
}

/*==========================
NUMBER INPUT
==========================*/

numberButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const value = button.dataset.value;

        if(shouldReset){

            display.value = "";
            shouldReset = false;

        }

        if(value === "." && display.value.includes(".")) return;

        display.value += value;

    });

});

/*==========================
OPERATORS
==========================*/

operatorButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(display.value==="") return;

        if(firstNumber!=="" && !shouldReset){

            calculate();

        }

        firstNumber = display.value;
        currentOperator = button.dataset.value;

        history.textContent = `${firstNumber} ${button.textContent}`;

        shouldReset = true;

    });

});

/*==========================
EQUAL BUTTON
==========================*/

equalBtn.addEventListener("click",calculate);

function calculate(){

    if(currentOperator==="" || shouldReset) return;

    secondNumber = display.value;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    let result = 0;

    switch(currentOperator){

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":

            if(num2===0){

                updateDisplay("Error");
                history.textContent="Division by Zero";

                firstNumber="";
                secondNumber="";
                currentOperator="";

                return;
            }

            result = num1 / num2;
            break;

        case "%":
            result = num1 % num2;
            break;

    }

    history.textContent =
    `${num1} ${currentOperator} ${num2} =`;

    updateDisplay(Number(result.toFixed(6)));

    firstNumber = result.toString();
    currentOperator = "";
    shouldReset = true;

}

/*==========================
CLEAR
==========================*/

clearBtn.addEventListener("click",()=>{

    firstNumber="";
    secondNumber="";
    currentOperator="";
    shouldReset=false;

    history.textContent="";
    updateDisplay("");

});

/*==========================
DELETE
==========================*/

deleteBtn.addEventListener("click",()=>{

    if(shouldReset) return;

    display.value = display.value.slice(0,-1);

});

/*==========================
KEYBOARD SUPPORT
==========================*/

document.addEventListener("keydown",(e)=>{

    if(!isNaN(e.key) || e.key==="."){

        document.querySelector(`[data-value="${e.key}"]`)?.click();

    }

    if(["+","-","*","/","%"].includes(e.key)){

        document.querySelector(`.operator[data-value="${e.key}"]`)?.click();

    }

    if(e.key==="Enter"){

        e.preventDefault();
        equalBtn.click();

    }

    if(e.key==="Backspace"){

        deleteBtn.click();

    }

    if(e.key==="Escape"){

        clearBtn.click();

    }

});
