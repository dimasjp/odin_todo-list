
const tasksArray = [];

const taskFactory = (title, date, priority) => {
    return { title, date, priority };
}

const createTask = (title, date, priority) => {
    const newTask = taskFactory(title, date, priority);
    tasksArray.push(newTask);
    console.log(tasksArray);
}

createTask("Task-1", "22");


export {
    taskFactory,
    tasksArray,
    createTask
}