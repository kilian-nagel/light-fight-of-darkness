
/* Animations
=============== */

function animateNavbar(){
    let mobile_navbar = document.querySelector('.mobile-navbar');
    let navbar_quit_btn = document.querySelector('.mobile-navbar__quit-btn');
    let navbar_show_btn = document.querySelector('.home-hero__navigation-icon');


    navbar_show_btn.addEventListener('click',()=>{
        mobile_navbar.classList.add('open-nav');
    })
    navbar_quit_btn.addEventListener('click',()=>{
        mobile_navbar.classList.remove('open-nav')
    })
}

function animateFeatures(){  
    window.addEventListener('scroll',checkScrollPosition);
}

function checkScrollPosition(){
    let body = document.querySelector('body');
    let adventure = document.querySelector('.adventure');
    let discover = document.querySelector('.discover');
    let fight = document.querySelector('.fight');
    let features = [adventure,discover,fight];
    for(let feature of features){
        featuresCor = feature.getBoundingClientRect();
        viewportHeight = window.innerHeight;
        if(viewportHeight-featuresCor.top >= 100){
            feature.classList.add('.loading-animation');
        }
    }
}

/* Main 
=============== */

function main(){
    animateNavbar();
    animateFeatures();
    console.log(window.innerHeight);
}

main();
