// Creating task object
const task = {
    title: "",
    description: ""
};

// task object constructor
function Task(title, description) {
    this.title = title;
    this.description = description;
};

Task.prototype.toString = function() {
    return `task title is "${this.title}".
    task description is "${this.description}".`;
};

let taskArray = [];

const addTask = (taskArray = []) => {
    const taskTitle = prompt("Enter the task title:");
    const taskDescription = prompt("Enter the task description:");

    let taskObject = new Task(taskTitle, taskDescription);

    taskArray.push(taskObject);
};

const viewTask = () => {
    if (taskArray.length === 0) {
        console.log("No tasks available.");
    } else {
        taskArray.forEach((task, index) => {
            console.log(`Task ${index + 1}:\n${task.toString()}`);
        });
    }
};

const menu = `Task Manager Menu:
    1. Add Task
    2. View Tasks
    3. Toggle Task Completion
    4. Edit Task
    5. Delete Task
    6. Exit`;

let flag = true; 

do {
    console.log(menu);
    let toDoNumber = parseInt(prompt("Enter your choice (1-6)"));
    
    switch (toDoNumber) {
        case 1:
            addTask(taskArray);
            break;
        case 2:
            viewTask(taskArray);
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            flag = false;
            break;
        default:
            console.log("Invalid choice. Please enter a number between 1 and 6.");
            break;
    }
    
} while (flag);

