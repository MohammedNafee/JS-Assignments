
const menu = `Task Manager Menu:
    1. Add Task
    2. View Tasks
    3. Toggle Task Completion
    4. Edit Task
    5. Delete Task
    6. Exit`

let flag = true; 

do {
    console.log(menu);
    let toDoNumber = parseInt(prompt("Enter your choice (1-6)"));
    
    switch (toDoNumber) {
        case 1:
            break;
        case 2:
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

