
// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================
// Close Menu After Click
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================
// Header Shadow on Scroll
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";
        header.style.background="rgba(255,255,255,.98)";

    }

    else{

        header.style.boxShadow="none";
        header.style.background="rgba(255,255,255,.95)";

    }

});

// ==========================
// Reveal Animation
// ==========================

const reveals = document.querySelectorAll(

".about-card,.skills-card,.project-card,.education-card,.contact-box"

);

function revealElements(){

    reveals.forEach(item=>{

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

reveals.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition=".8s ease";

});

window.addEventListener("scroll",revealElements);

revealElements();

// ==========================
// Active Navigation
// ==========================

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
/*==============================
SCROLL TO TOP BUTTON
==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
/*==============================
TYPING ANIMATION
==============================*/

const words = [

"Frontend Developer",

"Web Designer",

"UI Designer",

"CSE Student"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0, charIndex++);
    }

    else{

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    if(!isDeleting && charIndex === currentWord.length + 1){

        isDeleting = true;

        setTimeout(typeEffect,1200);

        return;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();
