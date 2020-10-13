import "./Components/TaskContainer.js"
import "./Components/TaskList.js"

let rawTasks = [
    {
        id : 2,
        content:'đi chơi',
        isCompleted: true,
        dateModified:'15/10/2020'
        
    },
    {
        id : 2,
        content:'đi ăn',
        isCompleted: true,
        dateModified:'15/10/2020'
        
    },
    {
        id : 3,
        content:'đi xem phim',
        isCompleted: false,
        dateModified:'15/10/2020'
        
    },
    {
        id : 4,
        content:'đi đưa bruh nhận job',
        isCompleted: true,
        dateModified:'15/10/2020'
        
    },
    {
        id : 5,
        content:'đi quẫy',
        isCompleted: false,
        dateModified:'15/10/2020'
        
    },
];

let taskList = document.getElementById('task-list-01');
    taskList.setTasks(rawTasks)
    
