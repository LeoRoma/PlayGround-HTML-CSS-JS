window.onload = function(){
    const currentProjectHolder = document.querySelector('.current-project-holder');
    
    function getCurrentProject(){
  
        const index = localStorage.getItem('index');
        console.log(index);
        let currentProject = projects[index];
        const title = currentProject.title;
        const description = currentProject.description;
    
        displayCurrentProject(title, description);
    }
    
    function displayCurrentProject(title, description){
        console.log(title, description);
    
        currentProjectHolder.innerHTML = `<h1>${title}</h1> 
                                            <p>${description}</p>`;
        clearLocalStorage();
    }
    
    getCurrentProject();
    function clearLocalStorage(){
        localStorage.clear();
    }
}

// const projectsHolder = document.querySelector('.projects-holder');
const projects = [...projectsData];

