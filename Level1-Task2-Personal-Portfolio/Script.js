/*==================================================
  PRELOADER
==================================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

    }, 800);

});


/*==================================================
  TYPING ANIMATION
==================================================*/

const typingText = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "UI Designer",
    "CSE Student",
    "Creative Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect(){

    let currentWord = words[wordIndex];


    if(!deleting){

        typingText.textContent =
        currentWord.substring(0, charIndex++);


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typingEffect,1000);

            return;

        }

    }
    else{

        typingText.textContent =
        currentWord.substring(0, charIndex--);


        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );

}


typingEffect();



/*==================================================
  MOBILE NAVBAR
==================================================*/


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("active");

});



document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});



/*==================================================
  HEADER SHADOW ON SCROLL
==================================================*/


const header = document.getElementById("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }
    else{

        header.classList.remove("scrolled");

    }

});



/*==================================================
  ACTIVE NAVIGATION HIGHLIGHT
==================================================*/


const sections =
document.querySelectorAll("section");


const navItems =
document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;


        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href")
        === "#" + current){

            link.classList.add("active");

        }


    });


});



/*==================================================
  SCROLL REVEAL ANIMATION
==================================================*/


const revealElements =
document.querySelectorAll(
".glass-card, .section-title"
);


const revealObserver =
new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("reveal","active");

        }


    });


},
{
    threshold:0.15
}
);



revealElements.forEach(element=>{

    revealObserver.observe(element);

});



/*==================================================
  SKILL PROGRESS BAR ANIMATION
==================================================*/


const skillSection =
document.querySelector("#skills");


const progressBars =
document.querySelectorAll(".progress span");



const skillObserver =
new IntersectionObserver(
(entries)=>{


    if(entries[0].isIntersecting){


        progressBars.forEach(bar=>{


            bar.style.width =
            bar.getAttribute("data-width");


        });


    }


},
{
    threshold:0.4
}
);



if(skillSection){

    skillObserver.observe(skillSection);

}



/*==================================================
  SCROLL TO TOP BUTTON
==================================================*/


const scrollBtn =
document.getElementById("scrollTop");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        scrollBtn.classList.add("show");

    }
    else{

        scrollBtn.classList.remove("show");

    }


});



scrollBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



/*==================================================
  CUSTOM CURSOR EFFECT
==================================================*/


const cursor =
document.querySelector(".cursor");



if(window.innerWidth > 768){


document.addEventListener(
"mousemove",
(e)=>{


    cursor.style.left =
    e.clientX + "px";


    cursor.style.top =
    e.clientY + "px";


});



document.querySelectorAll("a,button")
.forEach(item=>{


    item.addEventListener(
    "mouseenter",
    ()=>{

        cursor.style.transform =
        "translate(-50%,-50%) scale(2)";

    });



    item.addEventListener(
    "mouseleave",
    ()=>{

        cursor.style.transform =
        "translate(-50%,-50%) scale(1)";

    });


});


}



/*==================================================
  BUTTON RIPPLE EFFECT
==================================================*/


document.querySelectorAll(".btn")
.forEach(button=>{


    button.addEventListener(
    "click",
    function(e){


        const ripple =
        document.createElement("span");


        const rect =
        this.getBoundingClientRect();


        ripple.style.left =
        e.clientX - rect.left + "px";


        ripple.style.top =
        e.clientY - rect.top + "px";


        ripple.classList.add("ripple");


        this.appendChild(ripple);



        setTimeout(()=>{

            ripple.remove();

        },600);


    });


});



/*==================================================
  SMOOTH ANCHOR SCROLL
==================================================*/


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


    anchor.addEventListener(
    "click",
    function(e){


        const target =
        document.querySelector(
        this.getAttribute("href")
        );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });

});
