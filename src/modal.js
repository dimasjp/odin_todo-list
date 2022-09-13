import { createTask } from "./tasks.js";
import { createProject } from "./projects.js";

// Task input modal
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-content');
const closeButton = document.querySelector('.btn-close-modal');
const form = document.querySelector('#modal-form');
const submitButton = document.querySelector('.btn-form-submit');

const openModal = () => {
    modal.classList.remove('display-none');
}

document.addEventListener('click', (event) => {
    if (event.target === modal || event.target === closeButton) {
        closeModal();
    }
})

const closeModal = () => {
    form.classList.remove('task-form');
    form.classList.remove('project-form');
    modal.classList.add('display-none');
}

const createForm = () => {
    if (form.classList.contains('task-form')) {
        createTaskForm();
    } else if (form.classList.contains('project-form')) {
        createProjectForm();
    };
}

const createTaskForm = () => {
    form.innerHTML = '';

    const formTitle = document.createElement('p');
    formTitle.classList.add('form-title');
    formTitle.textContent = "Add New Task";

    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleInput.placeholder = "Task";
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title-input');
    titleInput.setAttribute('name', 'title-input');

    const dateInput = document.createElement('input');
    dateInput.classList.add('date-input');
    dateInput.setAttribute('type', 'text');
    dateInput.setAttribute('id', 'date-input');
    dateInput.setAttribute('name', 'date-input');

    const prioInput = document.createElement('input');
    prioInput.classList.add('prio-input');
    prioInput.setAttribute('type', 'text');
    prioInput.setAttribute('id', 'prio-input');
    prioInput.setAttribute('name', 'prio-input');

    form.append(formTitle, titleInput, dateInput, prioInput);
}

const createProjectForm = () => {
    form.innerHTML = '';

    const formTitle = document.createElement('p');
    formTitle.classList.add('form-title');
    formTitle.textContent = "Add New Project";

    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleInput.placeholder = "Project";
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title-input');
    titleInput.setAttribute('name', 'title-input');

    form.append(formTitle, titleInput);
}

submitButton.addEventListener('click', () => {
    const  titleInput = document.querySelector ('.title-input');
    if (form.classList.contains('task-form')) {
        createTask(titleInput.value);
    } else if (form.classList.contains('project-form')) {
        createProject(titleInput.value);
    };
    closeModal();
})



export { openModal, closeModal, createForm, createTaskForm, createProjectForm }



