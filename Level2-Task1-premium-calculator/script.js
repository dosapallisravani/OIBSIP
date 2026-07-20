const display = document.getElementById("display");

const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";



buttons.forEach(button => {

    button.addEventListener("click", () => {


        let value = button.innerText;



        // Clear All
        if(value === "AC"){

            currentInput = "";
            display.innerText = "0";

        }



        // Delete Last Character
        else if(value === "DEL"){

            currentInput = currentInput.slice(0,-1);

            display.innerText =
            currentInput || "0";

        }



        // Calculate Result
        else if(value === "="){

            try{

                currentInput =
                eval(currentInput);

                display.innerText =
                currentInput;

            }

            catch{

                display.innerText =
                "Error";

                currentInput="";

            }

        }



        // Percentage
        else if(value === "%"){

            currentInput =
            currentInput / 100;

            display.innerText =
            currentInput;

        }



        // Operators

        else{

            if(value === "×"){

                value="*";

            }

            if(value === "÷"){

                value="/";

            }


            currentInput += value;


            display.innerText =
            currentInput;

        }



    });


});
