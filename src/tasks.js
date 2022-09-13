import { renderTask } from "./display";

let tasksArray = [
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

export {
    Task,
    tasksArray,
    createTask
}