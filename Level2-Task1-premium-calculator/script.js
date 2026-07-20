const display = document.getElementById("display");


const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");


const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");


let firstNumber = "";
let operator = "";
let reset = false;



// Numbers

numbers.forEach(button=>{

    button.addEventListener("click",()=>{


        if(reset){

            display.value="";

            reset=false;

        }


        display.value += button.dataset.value;


    });


});




// Operators

operators.forEach(button=>{


    button.addEventListener("click",()=>{


        firstNumber = Number(display.value);


        operator = button.dataset.value;


        reset=true;


    });


});





// Equal


equalBtn.addEventListener("click",()=>{


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

            result = secondNumber==0 ? "Error" : firstNumber / secondNumber;

            break;



        case "%":

            result = firstNumber % secondNumber;

            break;


    }


    display.value=result;


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
