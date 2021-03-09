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
        setTimeout(function(){
            if(i < circleBreakPoint){
                moveTopRight(numberContainer);
            }else if(i >= circleBreakPoint && i < (circleBreakPoint * 2)){
                moveBottomRight(numberContainer);
            }else if(i >= circleBreakPoint*2 && i < (circleBreakPoint * 3)){
                moveBottomLeft(numberContainer);
            }
        }, timeout);
        timeout += 1000;
    }
 
    // changeSquare()
    // console.log(numberContainers.length -1)
}
let x = 500;
let y = 0
function moveTopRight(numberContainer){
    console.log(numberContainer)
    // numberContainer.classList.add('move-left');
    numberContainer.style.borderRadius = "50%";
    numberContainer.style.transform = `translate(${x}px,${y}px)`;
    console.log(x += 100);
}
let x1 = 700;
let y1 = 0

function moveBottomRight(numberContainer){
    numberContainer.style.borderRadius = "50%";
    numberContainer.style.transform = `translate(${x1}px,${y1}px)`;
    console.log(x1 -= 100);
}

let x2 = 700;
let y2 = 0

function moveBottomLeft(numberContainer){
    numberContainer.style.borderRadius = "50%";
    numberContainer.style.transform = `translate(${x2}px,${y2}px)`;
    console.log(x2 -= 100, y -= 100);
}
// function changeSquare(){
//     console.log("change square")
//     for(let i = numberContainers.length -1; i >= 0; i--){
//         const numberContainer = numberContainers[i];
//         setTimeout(function(){moveLeft(numberContainer)}, timeout);
//         timeout += 3000;
//     }
// }

// function moveLeft(numberContainer){
//     numberContainer.classList.remove('move-left');
//     numberContainer.style.borderRadius = "0%";
//     numberContainer.style.border = "green solid"
// }