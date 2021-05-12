const projects = document.querySelectorAll('.project');
console.log(projects);
const projectImages = document.querySelectorAll('.project-image');
console.log(projectImages)

for(let i = 0; i < projects.length; i++){
    const project = projects[i];

    project.addEventListener('mouseenter', () => {
        // const image = projectImages[i].dataset.image;
        const image = projectImages[i].getAttribute('data-image');
        console.log(image)
        const imageTag = `<div class="project-image"><img src="${image}" alt="image" height="100px"</div>`;
        project.innerHTML = imageTag;
        // const imgElement = document.querySelector('.set-image');
        // imgElement.setAttribute("src", image)
       
    })
}
