const landingpageImage = document.querySelector('.landingpage-image');
const navbarText = document.querySelector('.navbar-container p');
const landingpageText = document.querySelectorAll('.landingpage-body h1');
const slider = document.querySelector('.slider');




window.onload = function(){
    // landingpageImage.style.width = "20%";
    slider.classList.add('add-width');
    // slider.style.width = "20%"
    landingpageImage.classList.add('expand-vertical');
    // landingpageImage.classList.add('expand-horizontal');
    // landingpageImage.style.transform = "scaleY(0%, 80%)"
    textSlideIn();
}

function textSlideIn(){
    let timeout = 0
    for(let i = 0; i < landingpageText.length; i++){
        setTimeout(function(){
            // landingpageText[i].classList.add('text-slidein');
            landingpageText[i].style.transform = "translateX(-1390px)"
            // console.log(landingpageText[i])
        }, timeout)
        timeout += 200;
    }
}
