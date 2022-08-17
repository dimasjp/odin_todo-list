

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

const taskFactory = (title, date, priority) => {
    return { title, date, priority };
}

const createTask = (title, date, priority) => {
    const newTask = taskFactory(title, date, priority);
    tasksArray.push(newTask);
    console.log(tasksArray);
    renderTask();
}

const renderTask = () => {
    const taskSection = document.querySelector('.task-section');

    for (let i = 0; i < tasksArray.length; i++) {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        taskCard.setAttribute('data-index', i);
        taskSection.appendChild(taskCard);

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
    taskFactory,
    tasksArray,
    createTask,
    renderTask
}