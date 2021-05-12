// const projects = document.querySelectorAll('.project');
// console.log(projects);
// const projectImages = document.querySelectorAll('.project-image');
// console.log(projectImages)

// const title = document.querySelector('.project-title');
// for(let i = 0; i < projects.length; i++){
//     const project = projects[i];

//     project.addEventListener('mousemove', (event) => {
//         const image = projectImages[i].getAttribute('data-image');
//         console.log(image)
//         const imageTag = `<div class="image"><img src="${image}" alt="image" height="100px"</div>`;
//         project.innerHTML = imageTag
//         let left = event.pageX + "px";
//         let top = event.pageY + "px";
//         img.style.left = left;
//         img.style.top = top;
//     })
// }

const img = document.querySelector('.image-test');
document.addEventListener('mousemove', getMouseCoords);

setInterval(followMouse, 50);
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

function followMouse(){
    let distX = mouseCoords.x - imageCoords.x;
    let distY = mouseCoords.y - imageCoords.y;

    imageCoords.x += distX / 5;
    imageCoords.y += distY /2; 
    
    img.style.left = imageCoords.x + "px";
    img.style.top = imageCoords.y + "px";
}