window.onload = () => {
    const transitionEl = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');
    const text = document.querySelector('.hide-text h1');

    setTimeout(() => {
        transitionEl.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];


        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            // transitionEl.classList.add('is-active');
            text.style.top = "100%"

            console.log(text), "hi";
            setTimeout(() => {
                window.location.href = target;
            }, 500)
        })


    }
}

const text = document.querySelector('.banner-inner h1');

text.addEventListener('click', e =>{
    e.preventDefault();
    console.log("hello")
    text.classList.add('hide');
    
})


