
/*
=============== */

function init_listeners(){
    let mobile_navbar = document.querySelector('.mobile-navbar');
    let navbar_quit_btn = document.querySelector('.mobile-navbar__quit-btn');
    let navbar_show_btn = document.querySelector('.navigation-icon');

    navbar_show_btn.addEventListener('click',()=>{
        mobile_navbar.style.display = "block";
        console.log('wew');
    })
    navbar_quit_btn.addEventListener('click',()=>{
        mobile_navbar.style.display = "none";
    })
}

/* Main 
=============== */

function main(){
    init_listeners();
}

main();
