//==============================
// ELEMENTS
//==============================

const temperature =document.getElementById("temperature");
const unit = document.getElementById("unit");

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const error = document.getElementById("error");

//==============================
// CONVERT
//==============================

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {

    error.textContent = "";

    let value = parseFloat(temperature.value);

    if (isNaN(value)) {

        error.textContent = "Please enter a valid temperature.";

        clearResults();

        return;

    }

    let celsius, fahrenheit, kelvin;

    switch (unit.value) {

        case "celsius":

            if (value < -273.15) {

                error.textContent =
                    "Temperature cannot be below Absolute Zero.";

                clearResults();

                return;

            }

            celsius = value;
            fahrenheit = (value * 9 / 5) + 32;
            kelvin = value + 273.15;

            break;

        case "fahrenheit":

            if (value < -459.67) {

                error.textContent =
                    "Temperature cannot be below Absolute Zero.";

                clearResults();

                return;

            }

            celsius = (value - 32) * 5 / 9;
            fahrenheit = value;
            kelvin = celsius + 273.15;

            break;

        case "kelvin":

            if (value < 0) {

                error.textContent =
                    "Temperature cannot be below Absolute Zero.";

                clearResults();

                return;

            }

            kelvin = value;
            celsius = value - 273.15;
            fahrenheit = (celsius * 9 / 5) + 32;

            break;

    }

    animateValue(celsiusResult, celsius.toFixed(2) + " °C");
    animateValue(fahrenheitResult, fahrenheit.toFixed(2) + " °F");
    animateValue(kelvinResult, kelvin.toFixed(2) + " K");

}

//==============================
// RESET
//==============================

resetBtn.addEventListener("click", () => {

    temperature.value = "";
    unit.value = "celsius";

    error.textContent = "";

    clearResults();

});

//==============================
// CLEAR
//==============================

function clearResults() {

    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";

}

//==============================
// ANIMATION
//==============================

function animateValue(element, value) {

    element.style.opacity = "0";

    setTimeout(() => {

        element.textContent = value;

        element.style.opacity = "1";

    }, 250);

}

//==============================
// ENTER KEY
//==============================

temperature.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        convertTemperature();

    }

});

//==============================
// INPUT EFFECT
//==============================

temperature.addEventListener("input", () => {

    error.textContent = "";

});
