import "./Components/TaskContainer.js"
import "./Components/TaskList.js"
import "./Components/FormAddTasks.js"
import "./Components/InputWrapper.js"
import "./Components/FormRegister.js"
import "./Components/LoginForm.js"
import "./Components/Route.js"

    
// (async (id) => {
//     let result = await firebase
//                                 .firestore()
//                                 .collection("Task-lists")
//                                 .doc(id).get();
//                                 // result chỉ chả về 1 mớ linh tinh
//                                 // console.log(result);

//         let data = result.data();
//             // console.log(data);
//         //tạo 1 task list với một dữ liệu vừa lấy;
//         let $taskList = document.createElement('task-list');
//         $taskList.setAttribute('id', id);
//         $taskList.setAttribute('date-modified',data.dateModified);
//         $taskList.setTasks(data.tasks)
//                 //Truyền dữ liệu vào app
//             document.getElementById('app').appendChild($taskList);
//     //  lấy dữ liệu của document
// })("KO5hgnkiFeGFnZyLbYXw");

