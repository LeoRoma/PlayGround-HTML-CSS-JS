const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numbersContainer = document.querySelector('.numbers-container');
const buttonCircle = document.querySelector('.button-circle');

const htmlNumbers = numbers.map((number) => {
    return `
        <div class="number-container">
            <p class="number">${number}</p>
        </div>
    `
}).join(' ');

numbersContainer.innerHTML = htmlNumbers;

const circleBreakPoint = numbers.length / 4;
console.log(circleBreakPoint)



const numberContainers = document.querySelectorAll('.number-container');


buttonCircle.addEventListener('click', () =>{
    console.log('circle')
    changeCircle()
})


let timeout = 1000;
function changeCircle(){
    for(let i = 0; i < numberContainers.length; i++){
        const numberContainer = numberContainers[i];
        setTimeout(function(){moveRight(numberContainer)}, timeout);
        timeout += 1000;
    }
 
    changeSquare()
    console.log(numberContainers.length -1)
}

function moveRight(numberContainer){
    console.log(numberContainer)
    numberContainer.classList.add('move-left');
    numberContainer.style.borderRadius = "50%";
}

function changeSquare(){
    console.log("change square")
    for(let i = numberContainers.length -1; i >= 0; i--){
        const numberContainer = numberContainers[i];
        setTimeout(function(){moveLeft(numberContainer)}, timeout);
        timeout += 1000;
    }
}

function moveLeft(numberContainer){
    numberContainer.classList.remove('move-left');
    numberContainer.style.borderRadius = "0%";
}