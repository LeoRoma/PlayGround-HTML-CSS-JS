const main = document.querySelector('.main');
const widthZero = document.querySelector('.width-zero');
const text = document.querySelector('.text');
const slideBottom = document.getElementsByClassName('slide-bottom');
const cazzeggio = document.querySelector('.cazzeggio');
main.addEventListener('click', () => {
    moveImageAndResize()
    open()
    child()
    // animate()
    cazzeggio.classList.add('color')
})

function moveImageAndResize(){
    main.classList.add('move-image-and-resize');
}

function open(){
    widthZero.classList.add('open');
}

function animate(){
    text.classList.add('animate');
}

function child(){
    for(let i = 0; i < slideBottom.length; i++){
        let element = slideBottom[i];
        console.log(element)

        element.classList.add('color');
  
    }
}
// child()