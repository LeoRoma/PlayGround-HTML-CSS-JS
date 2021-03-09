const buttonUp = document.querySelector('.button-up');
const buttonDown = document.querySelector('.button-down');
const carouselContainer = document.querySelector('.carousel-container');
const cardContainerLength = document.querySelectorAll('.card-container').length;
const cardContainer = document.querySelector('.card-container');
const track = document.querySelector('.track');
console.log(cardContainerLength)

const carouselContainerHeight = carouselContainer.clientHeight;
console.log(carouselContainerHeight)

let cardIndex = 0;

buttonUp.addEventListener('click', () => {
    console.log('hello');
    if(cardIndex < cardContainerLength){
        console.log("hi")
        cardIndex++;
        track.style.transform = `translateY(-${cardIndex} * ${carouselContainerHeight}px)`;
    }
})