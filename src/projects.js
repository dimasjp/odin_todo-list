
const projectsArray = [];

const projectFactory = (title) => {
    return { title };
}

const createProject = (title) => {
    const newProject = projectFactory(title);
    projectsArray.push(newProject);
    console.log(projectsArray);
}

createProject("Project-1");

export {
    projectFactory,
    projectsArray,
    createProject
}