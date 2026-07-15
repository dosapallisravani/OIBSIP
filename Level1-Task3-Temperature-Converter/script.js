/*=========================================
 Tempora AI
 Premium Temperature Converter
=========================================*/

const temperature = document.getElementById("temperature");
const unit = document.getElementById("unit");

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const error = document.getElementById("error");

/*=========================================
 Convert
=========================================*/

convertBtn.addEventListener("click", convertTemperature);

temperature.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        convertTemperature();

    }

});

/*=========================================
 Function
=========================================*/

function convertTemperature(){

    let temp = parseFloat(temperature.value);

    if(isNaN(temp)){

        error.textContent = "Please enter a valid temperature.";

        clearResults();

        return;

    }

    let c, f, k;

    switch(unit.value){

        case "celsius":

            c = temp;
            f = (temp * 9/5) + 32;
            k = temp + 273.15;

            break;

        case "fahrenheit":

            c = (temp - 32) * 5/9;
            f = temp;
            k = c + 273.15;

            break;

        case "kelvin":

            c = temp - 273.15;
            f = (c * 9/5) + 32;
            k = temp;

            break;

    }

    if(k < 0){

        error.textContent = "Temperature cannot be below Absolute Zero.";

        clearResults();

        return;

    }

    error.textContent = "";

    animateNumber(celsiusResult, c);

    animateNumber(fahrenheitResult, f);

    animateNumber(kelvinResult, k);

}

/*=========================================
 Number Animation
=========================================*/

function animateNumber(element,value){

    let start = 0;

    let end = Number(value.toFixed(2));

    let duration = 700;

    let startTime = null;

    function update(currentTime){

        if(!startTime){

            startTime = currentTime;

        }

        let progress = Math.min((currentTime-startTime)/duration,1);

        let current = start + (end-start)*progress;

        element.textContent = current.toFixed(2);

        if(progress < 1){

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}

/*=========================================
 Reset
=========================================*/

resetBtn.addEventListener("click",()=>{

    temperature.value="";

    unit.value="celsius";

    error.textContent="";

    clearResults();

});

/*=========================================
 Clear Results
=========================================*/

function clearResults(){

    celsiusResult.textContent="--";

    fahrenheitResult.textContent="--";

    kelvinResult.textContent="--";

}

/*=========================================
 Input Glow
=========================================*/

temperature.addEventListener("focus",()=>{

    temperature.style.transform="scale(1.02)";

});

temperature.addEventListener("blur",()=>{

    temperature.style.transform="scale(1)";

});

/*=========================================
 Button Ripple Effect
=========================================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});
