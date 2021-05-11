Splitting()
const textOut = document.querySelectorAll('.perspective-line h1');
console.log(textOut)

const text0 = textOut[0];
const text1 = textOut[1];
console.log(text0)

const textOnHover = document.querySelector('.perspective-line');

const upperText = document.querySelectorAll('.upper-text span.char');
const lowerText = document.querySelectorAll('.lower-text span.char');
console.log(upperText)

textOnHover.addEventListener('mouseenter', () => {
    // let delay = 0;
    // lowerText.forEach(letter => {
    //     console.log(letter)
    //     letter.style.style.opacity = "1";
    //     letter.style.animationDelay = `${delay}ms`;

    //     delay += 20;
    // })
    // upperText.style.transform = "translateY(100%)";
    // upperText.style.opacity = "1";
    animateCharsIn();
    console.log("hello")
})


textOnHover.addEventListener('mouseleave', () => {
    animateCharsOut()
})

let animateCharsTimeline = gsap.timeline({
    defaults: {duration: 0.5, ease: "power2", stagger: 0.525}
})

function animateCharsIn() {
 
    gsap.timeline({
        defaults: {duration: 0.5, ease: "power2", stagger: 0.025}
    })
    .to(lowerText, { 
        y: '250%',
        rotationX: -90,
        opacity: 0
    })
    .to(upperText, { 
        startAt: {y: '-100%', rotationX: 90, opacity: 0},
        y: '100%',
        rotationX: 0,
        opacity: 1
    }, 0);
}

function animateCharsOut() {
    if ( this.animateCharsTimeline ) this.animateCharsTimeline.kill();
    gsap.timeline({
        defaults: {duration: 0.5, ease: 'power2', stagger:0.025}
    })
    .to(upperText, {
        y: '-100%',
        rotationX: 90,
        opacity: 0
    })
    .to(lowerText, {
        startAt: {y: '100%', rotationX: -90, opacity: 1},
        y: '0%',
        rotationX: 0,
        opacity: 1
    }, 0);
}