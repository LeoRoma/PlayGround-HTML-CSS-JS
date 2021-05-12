const projects = document.querySelectorAll('.project');

const img = document.querySelectorAll('.image-test');

const cursor = document.querySelector('.pick');

let imageCoords = {
    x: 0,
    y: 0
};

let mouseCoords = {
    x: 0,
    y: 0
}

function getMouseCoords(event){
    mouseCoords.x = event.pageX;
    mouseCoords.y = event.pageY;
}

function followMouse(index){
    img[index].style.left = mouseCoords.x + "px";
    img[index].style.top = mouseCoords.y + "px";
    cursor.style.left = (mouseCoords.x - 11) + "px";
    cursor.style.top = mouseCoords.y + 10+ "px";
}

for(let i = 0; i < projects.length; i++){
    const project = projects[i];
    project.addEventListener('mouseenter', () => {
        // img[i].style.display = "block";
        img[i].style.opacity = "1";
        // img[i].style.zIndex = "1";
        cursor.style.opacity = "1";
    })

    project.addEventListener('mousemove', (event) => {
        getMouseCoords(event);
        followMouse(i);
     
    })

    project.addEventListener('mouseleave',() => {
        img[i].style.display = "hidden";
        img[i].style.opacity = "0";
        cursor.style.opacity = "0";
    })
}


