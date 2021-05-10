const projects = [...projectsData];
const projectsHolder = document.querySelector('.projects-holder');



    
function displayProjects(projects){
    const p = projects.map((project, index) => {
        
        return `
            <h1 class="title" data-index="${index}">${project.title}</h1>
            <p>${project.description}</p>
        `
    }).join(" ");
    projectsHolder.innerHTML = p;
}
window.onload = function(){
    const title = document.querySelector('.title');
    title.addEventListener("click", () => {
        console.log("hi")
        window.location.href = "projectPage.html";
    })
}
displayProjects(projects);
// displayProjects(projects);