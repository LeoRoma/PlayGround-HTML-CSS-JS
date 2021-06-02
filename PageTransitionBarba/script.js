const transitionEl = document.querySelector('.transition');
transitionEl.classList.remove('is-active');


function pageTransition() {
    transitionEl.classList.add('is-active');
    console.log(transitionEl)
}

function contentAnimation() {
    transitionEl.classList.remove('is-active');
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





