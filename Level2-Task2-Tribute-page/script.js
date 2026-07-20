/*=========================================
     DOKKA SEETHAMMA TRIBUTE PAGE
              script.js
=========================================*/


//==========================
// Smooth Scroll Navigation
//==========================

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior: 'smooth'

        });

    });

});



//==========================
// Hero Button Scroll
//==========================

const heroBtn = document.querySelector(".btn");

if(heroBtn){

heroBtn.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector("#story").scrollIntoView({

behavior:"smooth"

});

});

}



//==========================
// Navbar Shadow
//==========================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.background="rgba(255,248,231,.95)";

navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.12)";

}

else{

navbar.style.background="rgba(255,255,255,.15)";

navbar.style.boxShadow="none";

}

});




//==========================
// Active Navigation Link
//==========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});




//==========================
// Scroll Reveal Animation
//==========================

const revealElements=document.querySelectorAll(

".story, .service, .legacy, .quote-section, .service-card"

);

const reveal=()=>{

revealElements.forEach(el=>{

const windowHeight=window.innerHeight;

const revealTop=el.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

};

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();




//==========================
// Image Hover Animation
//==========================

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.04)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});




//==========================
// Scroll Progress Bar
//==========================

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="5px";

progress.style.width="0%";

progress.style.zIndex="99999";

progress.style.background="#C89B3C";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progressWidth=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressWidth+"%";

});




//==========================
// Footer Year
//==========================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Tribute to Dokka Seethamma | Designed by Sravani Dosapalli`;

}
