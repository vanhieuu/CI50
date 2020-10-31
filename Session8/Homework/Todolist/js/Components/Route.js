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

router.on('/todolist',function(){
    $app.innerHTML = `<task-list></task-list>`
}).resolve();
window.router = router;