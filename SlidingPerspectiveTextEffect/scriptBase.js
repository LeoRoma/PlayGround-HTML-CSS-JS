Splitting()
const textOut = document.querySelectorAll('.perspective-line h1');

const text0 = textOut[0];
const text1 = textOut[1];

const textOnHover = document.querySelector('.perspective-line');


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