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
