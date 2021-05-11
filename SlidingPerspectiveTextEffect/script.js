const textOut = document.querySelectorAll('.perspective-line p');
const name = textOut[0].innerHTML.split("");
console.log(name);
const textOnHover = document.querySelector('.perspective-line');

textOnHover.addEventListener('mouseover', () => {
    // let timeout = 0;
    // for(let i = 0; i < name.length; i++){
    //     setTimeout(function(){
    //         name.style.transform = "rotateX(0deg) translateY(50%)";
    //         name.style.opacity = 1;
    //         timeout += 0.02;
    //     }, timeout)
    // }
    textOut[0].style.transform = "rotateX(0deg) translateY(50%)";
    textOut[0].style.opacity = 1;

    textOut[1].style.transform = " translateY(150%) rotateX(-90deg)";
    textOut[1].style.opacity = 0;
})

textOnHover.addEventListener('mouseout', () => {
    textOut[0].style.transform = "rotateX(90deg) translateY(-100%)";
    textOut[0].style.opacity = 0;
 
    textOut[1].style.transform = "rotateX(0deg) translateY(-50%)";
    textOut[1].style.opacity = 1;
})