import { createModal } from "./modal";
import { tasksArray } from "./tasks";

const content = document.querySelector('#content');

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
    return {projectSection, taskSection};
}

const renderTask = () => {
    const taskView = document.querySelector('.task-section');

    for (let i = 0; i < tasksArray.length; i++) {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        taskCard.setAttribute('data-index', i);
        taskView.appendChild(taskCard);

        const taskCardLeft = document.createElement('div');
        taskCardLeft.classList.add('task-card-left');
        taskCard.appendChild(taskCardLeft);

        const taskCardRight = document.createElement('div');
        taskCardRight.classList.add('task-card-right');
        taskCard.appendChild(taskCardRight);

        const taskCardTitle = document.createElement('h3');
        taskCardTitle.classList.add('task-title');
        taskCardTitle.textContent = tasksArray[i].title;
        taskCardLeft.appendChild(taskCardTitle);
    }
}

export {
    renderPage,
    renderTask
}