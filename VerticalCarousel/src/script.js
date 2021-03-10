const buttonUp = document.querySelector('.button-up');
const buttonDown = document.querySelector('.button-down');

const carouselContainer = document.querySelector('.carousel-container');
const carouselContainerHeight = carouselContainer.clientHeight;

const cardContainerRightLength = document.querySelectorAll('.card-container-right').length;


const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');


const carouselContainerLeft = document.querySelector('.carousel-container-left');
const carouselContainerLeftHeight = carouselContainerLeft.clientHeight;


const text = document.querySelectorAll('.image-wrapper h1');
console.log(text[0])

let cardIndex = 0;
let textIndex = 2;
sliderLeft.style.top = `-${(cardContainerRightLength - 1) * carouselContainerLeftHeight}px`;


buttonUp.addEventListener('click', () => {
    if (cardIndex === cardContainerRightLength - 1) {
        cardIndex = -1;
    }
    cardIndex++;
    sliderRight.style.transform = `translateY(-${cardIndex * carouselContainerHeight}px)`;
    sliderLeft.style.transform = `translateY(${cardIndex * carouselContainerLeftHeight}px)`;
    textIndex--;
    console.log(textIndex)
    text[textIndex].style.transform = "translateX(400px)";
    text[textIndex + 1].style.transform = "translateX(0px)";
})  

buttonDown.addEventListener('click', () => {
    if (cardIndex === 0) {
        cardIndex = cardContainerRightLength
    }
    cardIndex--;
    sliderRight.style.transform = `translateY(-${cardIndex * carouselContainerHeight}px)`;
    sliderLeft.style.transform = `translateY(${cardIndex * carouselContainerLeftHeight}px)`;
    textIndex++;
    text[textIndex].style.transform = "translateX(400px)";
    text[textIndex - 1].style.transform = "translateX(0px)";
})