// creating task object
class Task {
    constructor(title, description) {
        this.taskID = 0;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
}

class TaskManager {
    constructor() {
        this.taskArray = [];
        this.taskCounter = 1; // Keep track of task IDs
    }

    // display tasks
    viewTasks() {
        if (this.taskArray.length === 0) {
            console.log("No tasks available.");
        } else {
            console.log("Tasks:");
            this.taskArray.forEach((task) => {
                console.log(`${task.taskID}. ${task.title} => ${task.description} [${task.completed ? "Completed" : "Not Completed"}]`);
            });
        }
    }

    // add new task
    addTask() {
        const taskTitle = prompt("Enter the task title:");
        const taskDescription = prompt("Enter the task description:");
    
        const taskObject = new Task(taskTitle, taskDescription);
        taskObject.taskID = this.taskCounter++;
    
        this.taskArray.push(taskObject);
        console.log(`"${taskObject.title}" task was added successfully`);
    }

    // toggle task completion
    toggleCompletion() {
        const taskID = parseInt(prompt("Enter the task ID to toggle completion:"));
        const task = this.taskArray.find(task => task.taskID === taskID);

        if (task) {
            task.completed = !task.completed;
            console.log(`Task "${task.title}" completion status has been toggled.`);
        } else {
            console.log("Task not found!");
        }
    }

    // edit tasks
    editTask() {
        const taskID = parseInt(prompt("Enter the task ID to edit:"));
        const task = this.taskArray.find(task => this.taskID === taskID);

        if (task) {
            const newTitle = prompt("Enter new task title:", task.title);
            const newDescription = prompt("Enter new task description:", task.description);

            task.title = newTitle;
            task.description = newDescription;

            console.log(`Task "${task.title}" has been updated.`);
        } else {
            console.log("Task not found!");
            
        }
    }
}

const menu = `Task Manager Menu:
    1. Add Task
    2. View Tasks
    3. Toggle Task Completion
    4. Edit Task
    5. Delete Task
    6. Exit`;

const taskManager = new TaskManager();

let flag = true; 

do {
    console.log(menu);
    let toDoNumber = parseInt(prompt("Enter your choice (1-6)"));
    
    switch (toDoNumber) {
        case 1:
            taskManager.addTask();
            break;
        case 2:
            taskManager.viewTasks();
            break;
        case 3:
            taskManager.toggleCompletion();
            break;
        case 4:
            taskManager.editTask();
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

