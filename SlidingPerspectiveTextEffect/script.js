const textOut = document.querySelectorAll('.perspective-line p');
console.log(textOut[0]);
const textOnHover = document.querySelector('.perspective-line');

textOnHover.addEventListener('mouseover', () => {
    textOut[0].style.transform = "translateY(-100%)";
    textOut[0].style.transform = "rotateX(0deg)";
  
    textOut[0].style.opacity = 1;

    textOut[1].style.transform = "translateY(0%)";
    textOut[1].style.transform = "rotateX(-90deg)";
    // textOut[1].style.transformOrigin = "bottom";
    
    textOut[1].style.opacity = 0;
})

textOnHover.addEventListener('mouseout', () => {
    textOut[0].style.transform = "translateY(-200%)";
    textOut[0].style.transform = "rotateX(90deg)";
 
    textOut[0].style.opacity = 0;
 
    textOut[1].style.transform = "rotateX(0deg)";
   
    textOut[1].style.transform = "translateY(-100%)";
    textOut[1].style.opacity = 1;
})