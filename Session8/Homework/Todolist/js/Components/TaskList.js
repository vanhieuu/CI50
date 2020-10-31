const $template = document.getElementById('task-list-template')
// Đặt 1 setter là task => truy xuất task-list thành DOM  = > truy xuất task-list thành tasks[]
class TaskList extends HTMLElement {
    id = '';
    dateModified = '';
    tasks = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$tasks = this.shadowRoot.getElementById('tasks')
        this.$formAddTask = this.shadowRoot.querySelector('form-add-task')
        this.$name = this.shadowRoot.getElementById('name');
        this.$dateModified = this.shadowRoot.getElementById("date-modified");
        this.$taskList = this.shadowRoot.querySelector('.task-list');
      
        this.$taskList.addEventListener('add-task-event', (event) => {
            // console.log(event.detail);
            this.addTask(event.detail)
        });
        this.$taskList.addEventListener('update-task-event',(event)=>{
            this.updateTask(event.detail);
            });
        
            this.$taskList.addEventListener('delete-task-even',(event)=>{
                this.deleteTask(event.detail);
            })
    }

    static get observedAttributes() {
        return ['id', 'date-modified']
    }
    attributeChangedCallback(name, old, newVal) {
        if (name == 'id') {
            this.id = newVal;
        } else if (name == 'date-modified') {
            this.dateModified = newVal
        }
        this.render()
    }

    //=============================================\\
    // set newTasks(tasks) {
    //     this.tasks = tasks;
    //     this.render();
    // }
    setTasks(tasks) {
        this.tasks = tasks;
        this.render()
    }
    // Lưu ý khi đặt tên, khi để là set task thì n sẽ bị trùng tên với thuộc tính task = [] ở bên trên 
    // phải khác tên thuộc tính

    //==============================================\\
    addTask(task) {
        console.log(this);
        this.tasks.push(task);
        this.render();
        
        firebase.firestore()
                            .collection("Task-lists")
                            .doc(this.getAttribute('id'))
                            .update({
                                tasks: this.tasks
                            });       
    }
    //==============================================\\

    updateTask(task) {
      //tìm task có id tương ứng 
            // let foundTask = null;
            // for(let item of this.tasks){
            //     if(item.id == task.id){
            //         foundTask = item
            //         break;
            //     }
            // }
            let foundTask = this.tasks.find((function(item){
                return item.id == task.id
            }));
            if(foundTask != null){
                foundTask.content = task.content;
                console.log(foundTask);
            }
            // Update dataBase
            firebase.firestore().collection('"Task-lists"').doc(this.id).update(
                {tasks:this.tasks})
    }
    //==============================================\\

    render() {
        this.$name.innerHTML = 'Task list: ' + this.id;
        this.$dateModified.innerHTML = this.dateModified;
        this.$tasks.innerHTML = this.tasks.map((task) => {
            return `<task-container 
            id="${task.id}" 
            content ="${task.content}" 
            is-completed ="${task.isCompleted}" 
            date-modified = "${task.dateModified}">  
                    </task-container>
                    <hr>`;
        }).join('');

    }
    //==============================================\\

    deleteTask(task) {
        //C1: Filter
        //C2: Dùng splice
        // Filter
        // this.tasks = this.tasks.filter(function(item){
        //     return item.id != task.id;
        // });
        // firebase.firestore().collection("Task-lists").doc(this.id).update(
        //     {tasks:this.tasks})
        //C2
        let foundIndex = this.tasks.findIndex(function(item){
            return item.id === task.id
        });
            if(foundIndex > -1){
                this.tasks.splice(foundIndex, 1);
            firebase.firestore().collection("Task-lists").doc(this.id).update(
                    {tasks:this.tasks})
            }
    }
    
}
window.customElements.define('task-list', TaskList)