
function check_scroll_y(){
    let section = document.querySelector('.adventure');
    let section_cor = section.getBoundingClientRect();
    console.log(section_cor.y)
    if(section_cor.y>0){
        hide_left_navbar();
    }
    else {
        display_left_navbar();
    }
}

function show_left_navbar(){
    setInterval(check_scroll_y,100);
}

function display_left_navbar(){
    let navbar_container = document.querySelector('.adventure');
    let navbar = document.querySelector('.adventure-aside-navbar');
    navbar.style.display = "block";
    navbar_container.style.display = "block";
}

function hide_left_navbar(){
    let navbar_container = document.querySelector('.adventure');
    let navbar = document.querySelector('.adventure-aside-navbar');
    navbar.style.display = "none";
    navbar_container.style.display = "hidden";
}

/* Init all listeners
=============== */

function init_listeners(){

}

/* Main
==============*/

function main(){
    show_left_navbar();
}
main();