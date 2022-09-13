import { renderProject } from "./display";

let projectsArray = [
    {
        title: 'Project-1',
    },
];

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
}

const createProject = (title) => {
    const newProject = new Project(title);
    projectsArray.push(newProject);
    console.log(projectsArray);
    renderProject();
}

export {
    Project,
    projectsArray,
    createProject
}