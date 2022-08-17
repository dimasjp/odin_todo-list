import { projectFactory, projectsArray, createProject } from './projects.js';
import { taskFactory, tasksArray, createTask } from './tasks.js';
import './style.css';

const content = document.querySelector('#content');

const header = document.createElement('h1');
header.textContent = "DOM Test";
content.appendChild(header);
