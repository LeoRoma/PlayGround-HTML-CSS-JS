function getCurrentProject() {

    const index = localStorage.getItem('index');
    console.log(index);
    let currentProject = projects[index];
    const title = currentProject.title;
    const description = currentProject.description;

    displayCurrentProject(title, description);
}

function displayCurrentProject(title, description) {
    console.log(title, description);
    const currentProjectHolder = document.querySelector('.current-project-holder');
    currentProjectHolder.innerHTML = `<h1>${title}</h1> 
                                            <p>${description}</p>`;
    clearLocalStorage();
}

function clearLocalStorage() {
    localStorage.clear();
}


const projects = [...projectsData];

document.addEventListener('DOMContentLoaded', function () {
    getCurrentProject();
})

//tutorial for passing data between pages
//https://www.youtube.com/watch?v=GNZg1KRsWuU