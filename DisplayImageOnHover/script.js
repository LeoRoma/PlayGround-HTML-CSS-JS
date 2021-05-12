const projects = document.querySelectorAll('.project');
console.log(projects);
const projectImages = document.querySelectorAll('.project-image');
console.log(projectImages)


const img = document.querySelectorAll('.image-test');
console.log(img[0])

// setInterval(followMouse, 50);
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
    // let distX = mouseCoords.x - imageCoords.x;
    // let distY = mouseCoords.y - imageCoords.y;

    // imageCoords.x += distX / 5;
    // imageCoords.y += distY /2; 
    console.log("x: ", mouseCoords.x);
    console.log("y: ", mouseCoords.y);
    img[index].style.left = mouseCoords.x + "px";
    img[index].style.top = mouseCoords.y + "px";
}

for(let i = 0; i < projects.length; i++){
    const project = projects[i];
    project.addEventListener('mouseenter', () => {
        img[i].style.display = "block";
        img[i].style.opacity = "1";
    })

    project.addEventListener('mousemove', (event) => {
        getMouseCoords(event);
        followMouse(i);
     
    })

    project.addEventListener('mouseleave',() => {
        img[i].style.display = "hidden";
        img[i].style.opacity = "0";
    })
}


// document.addEventListener('mousemove', getMouseCoords);

