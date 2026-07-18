/*=========================
RESET
=========================*/

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

html{
scroll-behavior:smooth;
}

body{

background:#08131d;
color:#fff;
overflow-x:hidden;

}

/*=========================
BACKGROUND
=========================*/

.background{

position:fixed;
top:0;
left:0;

width:100%;
height:100%;

background:

linear-gradient(
rgba(5,10,20,.35),
rgba(0,0,0,.45)
),

url("images/background.jpg");

background-size:cover;
background-position:center;
background-repeat:no-repeat;

z-index:-3;

}

/*=========================
RAIN EFFECT
=========================*/

.rain{

position:fixed;

width:100%;
height:100%;

background-image:

linear-gradient(
transparent 92%,
rgba(255,255,255,.20) 100%
);

background-size:3px 28px;

animation:rain .6s linear infinite;

opacity:.25;

z-index:-2;

}

@keyframes rain{

from{

transform:translateY(-30px);

}

to{

transform:translateY(30px);

}

}

/*=========================
HEADER
=========================*/

header{

position:fixed;

top:0;
left:0;

width:100%;

padding:20px 8%;

display:flex;

justify-content:space-between;
align-items:center;

background:rgba(255,255,255,.08);

backdrop-filter:blur(18px);

border-bottom:1px solid rgba(255,255,255,.15);

z-index:1000;

}

.logo{

display:flex;

align-items:center;

gap:12px;

}

.logo i{

font-size:28px;

color:#FFD54F;

}

.logo h2{

font-size:26px;

font-weight:600;

}

nav{

display:flex;

gap:35px;

}

nav a{

text-decoration:none;

color:#fff;

font-size:16px;

transition:.3s;

}

nav a:hover{

color:#FFD54F;

}

/*=========================
HERO
=========================*/

.hero{

min-height:100vh;

display:flex;

justify-content:space-between;
align-items:center;

padding:120px 8% 60px;

gap:60px;

}

.hero-left{

max-width:500px;

}

.badge{

display:inline-block;

padding:10px 20px;

border-radius:30px;

background:rgba(255,255,255,.12);

margin-bottom:25px;

font-size:14px;

border:1px solid rgba(255,255,255,.15);

}

.hero-left h1{

font-size:65px;

margin-bottom:20px;

line-height:1.1;

}

.hero-left p{

font-size:18px;

line-height:1.8;

color:#ddd;

}

/*=========================
CALCULATOR
=========================*/

.glass{

width:380px;

padding:30px;

border-radius:25px;

background:rgba(255,255,255,.12);

backdrop-filter:blur(20px);

border:1px solid rgba(255,255,255,.18);

box-shadow:0 20px 50px rgba(0,0,0,.35);

}

.display{

background:rgba(255,255,255,.08);

padding:20px;

border-radius:18px;

margin-bottom:25px;

}

#display{

width:100%;

background:transparent;

border:none;

outline:none;

text-align:right;

font-size:42px;

color:#fff;

}
/*=========================
BUTTON GRID
=========================*/

.buttons{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:15px;

}

/*=========================
COMMON BUTTON
=========================*/

.btn{

height:70px;

border:none;

outline:none;

border-radius:18px;

cursor:pointer;

font-size:24px;

font-weight:600;

color:#fff;

background:rgba(255,255,255,.10);

backdrop-filter:blur(10px);

transition:.35s ease;

border:1px solid rgba(255,255,255,.12);

}

.btn:hover{

transform:translateY(-5px);

box-shadow:

0 10px 25px rgba(0,0,0,.35),

0 0 15px rgba(255,255,255,.20);

}

/*=========================
NUMBER BUTTONS
=========================*/

.number{

background:rgba(255,255,255,.08);

}

/*=========================
OPERATOR BUTTONS
=========================*/

.operator{

background:linear-gradient(
135deg,
#ffb347,
#ff8c42
);

}

.operator:hover{

background:linear-gradient(
135deg,
#ffc86a,
#ff9d57
);

}

/*=========================
CLEAR BUTTON
=========================*/

.clear{

background:linear-gradient(
135deg,
#ff4b5c,
#ff1744
);

}

/*=========================
DELETE BUTTON
=========================*/

.delete{

background:linear-gradient(
135deg,
#4f8cff,
#2962ff
);

}

/*=========================
EQUAL BUTTON
=========================*/

.equal{

background:linear-gradient(
135deg,
#00c853,
#00a152
);

font-size:30px;

}

.equal:hover{

transform:scale(1.05);

}

/*=========================
ZERO BUTTON
=========================*/

.zero{

grid-column:span 2;

}
/*=========================
FEATURES
=========================*/

.features{

padding:90px 8%;

text-align:center;

}

.features h2{

font-size:42px;

margin-bottom:50px;

}

.feature-container{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(230px,1fr));

gap:25px;

}

.feature-card{

padding:35px 25px;

border-radius:22px;

background:rgba(255,255,255,.10);

backdrop-filter:blur(18px);

border:1px solid rgba(255,255,255,.15);

transition:.4s;

}

.feature-card:hover{

transform:translateY(-10px);

box-shadow:0 20px 40px rgba(0,0,0,.35);

}

.feature-card i{

font-size:45px;

color:#FFD54F;

margin-bottom:15px;

}

.feature-card h3{

font-size:24px;

margin-bottom:10px;

}

.feature-card p{

font-size:15px;

line-height:1.8;

color:#ddd;

}

/*=========================
FOOTER
=========================*/

footer{

margin-top:70px;

padding:30px;

text-align:center;

background:rgba(0,0,0,.45);

backdrop-filter:blur(10px);

border-top:1px solid rgba(255,255,255,.15);

}

footer p{

margin:8px 0;

font-size:15px;

color:#ddd;

}

/*=========================
ANIMATION
=========================*/

.hero-left,
.calculator,
.feature-card{

animation:fadeUp .8s ease;

}

@keyframes fadeUp{

0%{

opacity:0;

transform:translateY(40px);

}

100%{

opacity:1;

transform:translateY(0);

}

}

/*=========================
RESPONSIVE
=========================*/

@media(max-width:900px){

.hero{

flex-direction:column;

text-align:center;

}

.hero-left h1{

font-size:48px;

}

.calculator{

width:100%;

max-width:380px;

}

nav{

display:none;

}

}

@media(max-width:600px){

header{

padding:18px 5%;

}

.hero{

padding:120px 5% 60px;

}

.hero-left h1{

font-size:38px;

}

.hero-left p{

font-size:16px;

}

.btn{

height:60px;

font-size:22px;

}

#display{

font-size:34px;

}

.features{

padding:70px 5%;

}

.features h2{

font-size:32px;

}

}
