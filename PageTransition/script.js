const landingpageImage = document.querySelector('.landingpage-image');
const navbarText = document.querySelector('.navbar-container p');
const landingpageText = document.querySelectorAll('.landingpage-body h1');
const slider = document.querySelector('.slider');




window.onload = function(){
    slider.classList.add('add-width');
    landingpageImage.classList.add('expand-vertical');
    textSlideIn();
}

function textSlideIn(){
    let timeout = 0
    for(let i = 0; i < landingpageText.length; i++){
        setTimeout(function(){
            landingpageText[i].style.transform = "translateX(-1390px)"
        }, timeout)
        timeout += 200;
    }
}
