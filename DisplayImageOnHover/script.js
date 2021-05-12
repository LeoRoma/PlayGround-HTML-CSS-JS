const projects = document.querySelectorAll('.project');
console.log(projects);
const projectImages = document.querySelectorAll('.project-image');
console.log(projectImages)

const title = document.querySelector('.project-title');
for(let i = 0; i < projects.length; i++){
    const project = projects[i];

    project.addEventListener('mousemove', (event) => {
        // const image = projectImages[i].dataset.image;
        // const image = projectImages[i].getAttribute('data-image');
        // console.log(image)
        // const imageTag = `<div class="project-image"><img src="${image}" alt="image" height="100px"</div>`;
        // const projectImage = document.createElement("img");
        // projectImage.src = image;
        // project.appendChild(projectImage);
        let left = event.pageX + "px";
        let top = event.pageY + "px";
        title.style.left = left;
        title.style.top = top;
    })
}
