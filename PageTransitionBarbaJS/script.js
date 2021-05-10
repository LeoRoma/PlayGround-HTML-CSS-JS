const projects = [...projectsData];
const projectsHolder = document.querySelector('.projects-holder');
    
function displayProjects(projects){
    const p = projects.map((project, index) => {
        
        return `
            <h1 class="title" data-index="${index}">${project.title}</h1>
        `
    }).join(" ");
    projectsHolder.innerHTML = p;
}




displayProjects(projects);
// displayProjects(projects);

window.onload = function(){
    const titles = document.querySelectorAll('.title');

    for(let i = 0; i < titles.length; i++){
        const title = titles[i];
        
        title.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("hi", i)
            const index = title.dataset.index; // 12
            console.log(index)
            localStorage.setItem('index', index);
            window.location.href = "projectPage.html";
        })
    }

}