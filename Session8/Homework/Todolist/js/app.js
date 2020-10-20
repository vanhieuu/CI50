import "./Components/TaskContainer.js"
import "./Components/TaskList.js"
import "./Components/FormAddTasks.js"

// let rawTasks = [
//     {
//         id : 2,
//         content:'đi chơi',
//         isCompleted: true,
//         dateModified:'15/10/2020'
        
//     },
//     {
//         id : 2,
//         content:'đi ăn',
//         isCompleted: true,
//         dateModified:'15/10/2020'
        
//     },
//     {
//         id : 3,
//         content:'đi xem phim',
//         isCompleted: false,
//         dateModified:'15/10/2020'
        
//     },
//     {
//         id : 4,
//         content:'đi đưa bruh nhận job',
//         isCompleted: true,
//         dateModified:'15/10/2020'
        
//     },
//     {
//         id : 5,
//         content:'đi quẫy',
//         isCompleted: false,
//         dateModified:'15/10/2020'
        
//     },
// ];

// let taskList = document.getElementById('task-list-01');
//     taskList.setTasks(rawTasks)
    
(async (id) => {
    let result = await firebase
                                .firestore()
                                .collection("Task-lists")
                                .doc(id).get();
                                // result chỉ chả về 1 mớ linh tinh
                                console.log(result);

        let data = result.data();
            console.log(data);
        //tạo 1 task list với một dữ liệu vừa lấy;
        let $taskList = document.createElement('task-list');
        $taskList.setAttribute('id', id);
        $taskList.setAttribute('date-modified',data.dateModified);
        $taskList.setTasks(data.tasks)
                //Truyền dữ liệu vào app
            document.getElementById('app').appendChild($taskList);
    //  lấy dữ liệu của document
})("KO5hgnkiFeGFnZyLbYXw");
