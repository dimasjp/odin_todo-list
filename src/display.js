import { openModal, closeModal } from "./modal";
import { renderTask, createTask } from "./tasks";
import { createForm } from "./form";

const content = document.querySelector('#content');
const form = document.querySelector('#modal-form');

const renderPage = () => {

    const header = document.createElement('div');
    header.textContent = "DOM";
    content.appendChild(header);

    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    content.appendChild(main);

    const projectSection = document.createElement('div');
    projectSection.classList.add('project-section');
    main.appendChild(projectSection);

    const projectControl = document.createElement('div');
    projectControl.classList.add('project-control');
    projectSection.appendChild(projectControl);

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectSection.appendChild(projectContainer);

    const taskSection = document.createElement('div')
    taskSection.classList.add('task-section');
    main.appendChild(taskSection);

    const taskControl = document.createElement('div');
    taskControl.classList.add('task-control');
    taskSection.appendChild(taskControl);

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskSection.appendChild(taskContainer);

    const openProjectModal = document.createElement('button');
    openProjectModal.classList.add('open-project-modal');
    openProjectModal.textContent = "Project";
    projectControl.appendChild(openProjectModal);

    openProjectModal.addEventListener('click', () => {
        openModal();
        form.classList.add('project-form');
        createForm();
    })

    const openTaskModal = document.createElement('button');
    openTaskModal.classList.add('open-task-modal');
    openTaskModal.textContent = "Task";
    taskControl.appendChild(openTaskModal);

    openTaskModal.addEventListener('click', () => {
        openModal();
        form.classList.add('task-form');
        createForm();
    })
    renderTask();
}


export {
    renderPage,
}