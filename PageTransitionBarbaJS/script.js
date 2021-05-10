const projects = [...projectsData];
const projectsHolder = document.querySelector('.projects-holder');



    
function displayProjects(projects){
    const p = projects.map((project, index) => {
        
        return `
            <a href="${projectPage.html}"><h1 data-index="${index}">${project.title}</h1></a>
            <p>${project.description}</p>
        `
    }).join(" ");
    projectsHolder.innerHTML = p;
}
window.onload = function(){
    displayProjects(projects);
}
// displayProjects(projects);