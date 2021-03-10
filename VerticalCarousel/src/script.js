const buttonUp = document.querySelector('.button-up');
const buttonDown = document.querySelector('.button-down');
const carouselContainer = document.querySelector('.carousel-container');
const cardContainerLength = document.querySelectorAll('.card-container').length;
const cardContainer = document.querySelector('.card-container');
const track = document.querySelector('.track');
console.log(cardContainerLength)

const carouselContainerHeight = carouselContainer.clientHeight;
console.log(carouselContainerHeight)

let cardIndex = 1;


buttonUp.addEventListener('click', () => {
    console.log(cardIndex);
    if (cardIndex === cardContainerLength) {
        cardIndex = 1
    }
    let moveY = cardIndex * carouselContainerHeight;
    track.style.transform = `translateY(-${moveY}px)`;

    cardIndex++;
})

buttonDown.addEventListener('click', () => {
    console.log(cardIndex);
    if (cardIndex === 0) {
        cardIndex = cardContainerLength
    }
    cardIndex--;
    let moveY = cardIndex * carouselContainerHeight;
    track.style.transform = `translateY(-${moveY}px)`;

    
})