import { tasksArray } from "./tasks";
import { projectsArray } from "./projects";

const renderTask = () => {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML = '';

    for (let i = 0; i < tasksArray.length; i++) {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        taskCard.setAttribute('data-index', i);
        taskContainer.appendChild(taskCard);

        const taskCardLeft = document.createElement('div');
        taskCardLeft.classList.add('task-card-left');
        taskCard.appendChild(taskCardLeft);

        const taskCardRight = document.createElement('div');
        taskCardRight.classList.add('task-card-right');
        taskCard.appendChild(taskCardRight);

        const taskCardTitle = document.createElement('p');
        taskCardTitle.classList.add('task-title');
        taskCardTitle.textContent = tasksArray[i].title;
        taskCardLeft.appendChild(taskCardTitle);

        const taskCardEdit = document.createElement('button');
        taskCardEdit.classList.add('task-edit');
        taskCardEdit.textContent = "Edit";
        taskCardRight.appendChild(taskCardEdit);

        const taskCardDelete = document.createElement('button');
        taskCardDelete.classList.add('task-delete-btn');
        taskCardDelete.textContent = "Delete";
        taskCardRight.appendChild(taskCardDelete);
    }
}

const renderProject = () => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = '';

    for (let i = 0; i < projectsArray.length; i++) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.setAttribute('data-index', i);
        projectContainer.appendChild(projectCard);

        const projectCardLeft = document.createElement('div');
        projectCardLeft.classList.add('project-card-left');
        projectCard.appendChild(projectCardLeft);

        const projectCardRight = document.createElement('div');
        projectCardRight.classList.add('project-card-right');
        projectCard.appendChild(projectCardRight);

        const projectCardTitle = document.createElement('p');
        projectCardTitle.classList.add('project-title');
        projectCardTitle.textContent = projectsArray[i].title;
        projectCardLeft.appendChild(projectCardTitle);

        const projectCardEdit = document.createElement('button');
        projectCardEdit.classList.add('project-edit');
        projectCardEdit.textContent = "Edit";
        projectCardRight.appendChild(projectCardEdit);

        const projectCardDelete = document.createElement('button');
        projectCardDelete.classList.add('project-delete-btn');
        projectCardDelete.textContent = "Delete";
        projectCardRight.appendChild(projectCardDelete);
    }
}

export { renderProject, renderTask }