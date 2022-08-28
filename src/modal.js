import { createForm, createTaskForm, createProjectForm } from "./form.js";


// Task input modal
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.btn-close-modal');
const form = document.querySelector('#modal-form');


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



export { openModal, closeModal }


