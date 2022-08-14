
const projectsArray = [];

const projectFactory = (name) => {
    return { name };
}

const createProject = (name) => {
    const newProject = projectFactory(name);
    projectsArray.push(newProject);
    console.log(projectsArray);
}

createProject("Project-1");

export {
    projectFactory,
    projectsArray,
    createProject
}