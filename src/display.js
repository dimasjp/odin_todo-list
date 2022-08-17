import { createModal } from "./modal";
import { tasksArray } from "./tasks";

const renderPage = () => {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.textContent = "DOM";
    content.appendChild(header);

    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    content.appendChild(main);

    const projectSection = document.createElement('div');
    projectSection.classList.add('project-section');
    main.appendChild(projectSection);

    const taskSection = document.createElement('div')
    taskSection.classList.add('task-section');
    main.appendChild(taskSection);

    // const modalButton = document.createElement('button');
    // modalButton.textContent = "Open Modal";
    // modalButton.addEventListener('click', () => {
    //     createModal();
    //     header.textContent = "A";
    // });
    // content.appendChild(modalButton);
}

export {
    renderPage,
}