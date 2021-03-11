const brick = document.querySelectorAll('.brick');

let timeout = 0;
for(let i = 0; i < brick.length; i++){
    setTimeout(function(){
        console.log("hello")
        brick[i].style.height = "0";
    }, timeout);

    timeout += 2000;
}
