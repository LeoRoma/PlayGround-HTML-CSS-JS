const buttonUp = document.querySelector('.button-up');
const buttonDown = document.querySelector('.button-down');

const carouselContainer = document.querySelector('.carousel-container');
const carouselContainerHeight = carouselContainer.clientHeight;

const cardContainerRightLength = document.querySelectorAll('.card-container-right').length;


const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');

let cardIndex = 0;

sliderLeft.style.top = `-${(cardContainerRightLength - 1) * carouselContainerHeight}px`;

buttonUp.addEventListener('click', () => {
    if (cardIndex === cardContainerRightLength - 1) {
        cardIndex = -1;
    }
    cardIndex++;
    sliderRight.style.transform = `translateY(-${cardIndex * carouselContainerHeight}px)`;
    sliderLeft.style.transform = `translateY(${cardIndex * carouselContainerHeight}px)`;
})

buttonDown.addEventListener('click', () => {
    if (cardIndex === 0) {
        cardIndex = cardContainerRightLength
    }
    cardIndex--;
    sliderRight.style.transform = `translateY(-${cardIndex * carouselContainerHeight}px)`;
    sliderLeft.style.transform = `translateY(${cardIndex * carouselContainerHeight}px)`;
})