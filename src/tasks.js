import { closeModal } from "./modal";

const tasksArray = [
    {
        title: 'TaskTest-22',
    },
    {
        title: 'TaskTest-23',
    },
    {
        title: 'TaskTest-24',
    },
];

class Task {
    constructor(title, date, priority) {
        this.title = title;
        this.date = date;
        this.priority = priority;
    }
}

const createTask = (title, date, priority) => {
    const newTask = new Task(title, date, priority);
    tasksArray.push(newTask);
    console.log(tasksArray);
    renderTask();
}

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


export {
    Task,
    tasksArray,
    createTask,
    renderTask
}