// const transitionEl = document.querySelector('.transition');
// transitionEl.classList.remove('is-active');


function pageTransition() {
    let tl = gsap.timeline();
    tl.to('.hide-text h1', {duration: .3, translateY: 100})
    tl.to('.transition', {duration: .5, translateX: '100%'})
    tl.to('.transition', {duration: .5, translateX: 0, delay: 1})
    // transitionEl.classList.add('is-active');
    // console.log(transitionEl)
}

function contentAnimation() {
    // tl.to('.transition', {duration: .5, left: -100})
    // tl.to('.transition', {duration: .5, left: 0})
    // transitionEl.classList.remove('is-active');
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1500);
            done();
        },

        async enter(data) {
            contentAnimation()
        }
    }]
})





