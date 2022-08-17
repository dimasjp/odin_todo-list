import { renderTask } from "./display";

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


export {
    taskFactory,
    tasksArray,
    createTask
}