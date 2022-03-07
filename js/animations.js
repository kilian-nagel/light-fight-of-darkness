

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

function main(){
    animateFeatures();
}

main();