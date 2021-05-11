Splitting()
const textOut = document.querySelectorAll('.perspective-line h1');

const text0 = textOut[0];
const text1 = textOut[1];

const textOnHover = document.querySelector('.perspective-line');


// textOnHover.addEventListener('mouseover', () => {

//     textOut[0].style.transform = "rotateX(0deg) translateY(100%)";
//     textOut[0].style.opacity = 1;

//     textOut[1].style.transform = " translateY(100%) rotateX(-90deg)";
//     textOut[1].style.opacity = 0;
// })

// textOnHover.addEventListener('mouseout', () => {

//     textOut[0].style.transform = "rotateX(90deg) translateY(-100%)";
//     textOut[0].style.opacity = 0;
 
//     textOut[1].style.transform = "rotateX(0deg) translateY(0%)";
//     textOut[1].style.opacity = 1;
// })




// textOnHover.addEventListener('mouseover', () => {
//     animateCharsIn();
// })


// textOnHover.addEventListener('mouseout', () => {
//     animateCharsOut()
// })

// let animateCharsTimeline = gsap.timeline({
//     defaults: {duration: 0.5, ease: "power2", stagger: 0.025}
// })

function animateCharsIn() {
    gsap.timeline({
        defaults: {duration: 0.5, ease: "power2", stagger: 0.025}
    })
    .to(text1, { 
        y: '100%',
        rotationX: -90,
        opacity: 0
    })
    .to(text0, { 
        startAt: {y: '-100%', rotationX: 90, opacity: 0},
        y: '100%',
        rotationX: 0,
        opacity: 1
    }, 0);
}

function animateCharsOut() {
    gsap.timeline({
        defaults: {duration: 0.5, ease: 'power2', stagger:0.025}
    })
    .to(text0, {
        y: '-100%',
        rotationX: 90,
        opacity: 0
    })
    .to(text1, {
        startAt: {y: '100%', rotationX: -90, opacity: 0},
        y: '0%',
        rotationX: 0,
        opacity: 1
    }, 0);
}