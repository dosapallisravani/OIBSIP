// ===============================
// DOKKA SEETHAMMA TRIBUTE PAGE JS
// ===============================


// Explore Button Scroll

const exploreBtn = document.querySelector(".hero-content button");

exploreBtn.addEventListener("click", () => {

    document.querySelector("#story").scrollIntoView({
        behavior:"smooth"
    });

});



// Scroll Reveal Animation

const sections = document.querySelectorAll("section");


const revealOnScroll = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;


        if(sectionTop < screenPosition){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

};


window.addEventListener("scroll", revealOnScroll);



// Initial Section Animation Style

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s ease";

});


// Navbar shadow on scroll

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.15)";

    }

    else{

        header.style.boxShadow="none";

    }


});



// Timeline Card Animation

const cards = document.querySelectorAll(
".timeline-card, .card"
);


cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{

        card.style.transition="0.3s";
        card.style.transform="translateY(-10px)";

    });



    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });


});
