import {getDataDoc, getCurrentUser} from "./ultil.js"

let $app = document.getElementById('app')
let root = null;
let useHash = true;
let hash  = "#"
let router = new Navigo(root, useHash,hash)

router.on('/sign-in',function(){
        $app.innerHTML = `<form-login></form-login>`
}).resolve();

router.on('/sign-up',function(){
    $app.innerHTML = `<form-register></form-register>`
}).resolve();

router.on('/todolist',async function(){
    let currentUser = getCurrentUser();
    let result = await firebase.firestore().collection("Task-lists")
                                            .where('owner','==', currentUser.id)
                                            .get();
                                            let taskListData = getDataDoc(result.docs[0]);
    // $app.innerHTML = `<task-list id ="${id}"></task-list>`
    let $taskList = document.createElement('task-list')
    $taskList.setAttribute('id',taskListData.id);
    $taskList.setTasks(taskListData.tasks);
    $app.appendChild($taskList);
}).resolve();
window.router = router;