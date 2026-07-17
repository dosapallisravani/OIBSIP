// ==========================
// ELEMENTS
// ==========================

const tempInput = document.getElementById("temperature");
const unit = document.getElementById("unit");

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

const celsius = document.getElementById("celsiusResult");
const fahrenheit = document.getElementById("fahrenheitResult");
const kelvin = document.getElementById("kelvinResult");

const error = document.getElementById("error");

// ==========================
// CONVERT BUTTON
// ==========================

convertBtn.addEventListener("click", convertTemperature);

// ==========================
// RESET BUTTON
// ==========================

resetBtn.addEventListener("click", resetValues);

// ==========================
// ENTER KEY SUPPORT
// ==========================

tempInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        convertTemperature();

    }

});

// ==========================
// CONVERSION
// ==========================

function convertTemperature(){

    let value = parseFloat(tempInput.value);

    if(isNaN(value)){

        error.textContent="Please enter a valid temperature.";

        clearResults();

        return;

    }

    error.textContent="";

    let c,f,k;

    switch(unit.value){

        case "celsius":

            c=value;
            f=(value*9/5)+32;
            k=value+273.15;

        break;

        case "fahrenheit":

            f=value;
            c=(value-32)*5/9;
            k=c+273.15;

        break;

        case "kelvin":

            k=value;
            c=value-273.15;
            f=(c*9/5)+32;

        break;

    }

    if(k<0){

        error.textContent="Temperature cannot be below Absolute Zero.";

        clearResults();

        return;

    }

    celsius.textContent=c.toFixed(2);

    fahrenheit.textContent=f.toFixed(2);

    kelvin.textContent=k.toFixed(2);

}

// ==========================
// RESET
// ==========================

function resetValues(){

    tempInput.value="";

    unit.value="celsius";

    error.textContent="";

    clearResults();

}

// ==========================
// CLEAR RESULTS
// ==========================

function clearResults(){

    celsius.textContent="--";

    fahrenheit.textContent="--";

    kelvin.textContent="--";

}
/*=========================================
CARD FADE-IN
=========================================*/

window.addEventListener("load",()=>{

const card=document.querySelector(".converter-card");

card.animate(

[
{
opacity:0,
transform:"translateY(60px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],

{
duration:1000,
fill:"forwards",
easing:"ease-out"
}

);

});

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.4)";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.pointerEvents="none";

ripple.style.animation="ripple .7s linear";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

/*=========================================
HOVER GLOW
=========================================*/

document.querySelectorAll(".result-box").forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.style.transform="translateY(-8px) scale(1.03)";

});

box.addEventListener("mouseleave",()=>{

box.style.transform="translateY(0) scale(1)";

});

});

/*=========================================
SCROLL REVEAL
=========================================*/

const revealItems=document.querySelectorAll(

".feature-card,.about,.converter-card"

);

function reveal(){

const trigger=window.innerHeight*0.85;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

}

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

/*=========================================
MOUSE GLOW
=========================================*/

document.addEventListener("mousemove",(e)=>{

document.documentElement.style.setProperty(

"--mouseX",

e.clientX+"px"

);

document.documentElement.style.setProperty(

"--mouseY",

e.clientY+"px"

);

});
