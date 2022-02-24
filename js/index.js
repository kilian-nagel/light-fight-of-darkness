
/*
=============== */

function init_listeners(){
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

/* Main 
=============== */

function main(){
    init_listeners();
}

main();
