const brick = document.querySelectorAll('.brick');
console.log(brick.length)
const random = [0, 5, 3, 10, 4, 9, 2, 6, 1, 8, 11, 4, 14, 7, 12, 13, 15 ]

let timeout = 0;
for(let i = 0; i <= brick.length; i++){
    setTimeout(function(){
        console.log(i)
        brick[random[i]].style.opacity = "0";
    }, timeout);

    timeout += 500;
}

