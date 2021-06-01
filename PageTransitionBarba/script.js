window.onload = () => {
    // const transitionEl = document.querySelector('.transition');
    // const anchors = document.querySelectorAll('a');
    // const text = document.querySelector('.hide-text h1');

    // setTimeout(() => {
    //     transitionEl.classList.remove('is-active');
    // }, 500);

    // for (let i = 0; i < anchors.length; i++) {
    //     const anchor = anchors[i];

    //     anchor.addEventListener('click', e => {
    //         e.preventDefault();
  
    //         let target = e.target.href;

    //         transitionEl.classList.add('is-active');
    //         // text.style.top = "100%"
            
    //         setTimeout(() => {
    //             window.location.href = target;
    //         }, 500)
    //     })
    // }
    // transitionEl.classList.remove('is-active');
}

const transitionEl = document.querySelector('.transition');
transitionEl.classList.remove('is-active');

function pageTransition(){
    transitionEl.classList.add('is-active');
    // transitionEl.classList.remove('is-active');
    console.log("hello")

}

function contentAnimation(){
    // transitionEl.classList.add('is-active');
    transitionEl.classList.remove('is-active');
    console.log("hello")
}

function delay(n){
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
        async leave(data){
            const done = this.async();
            pageTransition();
            await delay(1500);
            done();
        },

        async enter(data){
            contentAnimation()
        }
    }]
})


