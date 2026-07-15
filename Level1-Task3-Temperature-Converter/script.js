/*=========================================
TEMPORA
Premium JavaScript
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
PAGE LOAD ANIMATION
=========================================*/

window.addEventListener("load",()=>{

document.querySelector(".converter-panel").animate(

[
{
opacity:0,
transform:"translateY(80px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],

{
duration:1200,
fill:"forwards",
easing:"ease"
}

);

});

/*=========================================
ENTER KEY
=========================================*/

temperature.addEventListener("keypress",function(e){

if(e.key==="Enter"){

convertTemperature();

}

});

/*=========================================
BUTTON EVENTS
=========================================*/

convertBtn.addEventListener(

"click",

convertTemperature

);

resetBtn.addEventListener(

"click",

resetValues

);

/*=========================================
CONVERT
=========================================*/

function convertTemperature(){

let value=parseFloat(temperature.value);

if(isNaN(value)){

showError("Please enter temperature.");

clearResults();

return;

}

let c,f,k;

switch(unit.value){

case "celsius":

c=value;

f=(value*9/5)+32;

k=value+273.15;

break;

case "fahrenheit":

c=(value-32)*5/9;

f=value;

k=c+273.15;

break;

case "kelvin":

c=value-273.15;

f=(c*9/5)+32;

k=value;

break;

}

if(k<0){

showError("Temperature below Absolute Zero.");

clearResults();

return;

}

error.textContent="";

animateValue(celsiusResult,c);

animateValue(fahrenheitResult,f);

animateValue(kelvinResult,k);

}

/*=========================================
RESET
=========================================*/

function resetValues(){

temperature.value="";

unit.value="celsius";

error.textContent="";

clearResults();

}

/*=========================================
CLEAR RESULTS
=========================================*/

function clearResults(){

celsiusResult.textContent="--";

fahrenheitResult.textContent="--";

kelvinResult.textContent="--";

}

/*=========================================
ERROR
=========================================*/

function showError(msg){

error.textContent=msg;

}

/*=========================================
NUMBER ANIMATION
=========================================*/

function animateValue(el,value){

let start=0;

let end=parseFloat(value.toFixed(2));

let duration=700;

let startTime=null;

function update(current){

if(!startTime){

startTime=current;

}

let progress=Math.min(

(current-startTime)/duration,

1

);

let currentValue=start+

(end-start)*progress;

el.textContent=currentValue.toFixed(2);

if(progress<1){

requestAnimationFrame(update);

}

}

requestAnimationFrame(update);

}
