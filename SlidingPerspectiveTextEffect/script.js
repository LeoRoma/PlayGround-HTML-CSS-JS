const textOut = document.querySelectorAll('.perspective-line p');
console.log(textOut[0]);
const textOnHover = document.querySelector('.perspective-line');

textOnHover.addEventListener('mouseover', () => {
    textOut[0].style.transform = "rotateX(0deg) translateY(50%)";
    textOut[0].style.opacity = 1;

    textOut[1].style.transform = "rotateX(-90deg) translateY(0%)";
    textOut[1].style.opacity = 0;
})

textOnHover.addEventListener('mouseout', () => {
    textOut[0].style.transform = "rotateX(90deg) translateY(-100%)";
    textOut[0].style.opacity = 0;
 
    textOut[1].style.transform = "rotateX(0deg) translateY(-50%)";
    textOut[1].style.opacity = 1;
})