const $template = document.getElementById("form-add-task-template");

class FormAddTasks extends HTMLElement {
    addTaskCallback;
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });// Có cũng được mà không cũng được
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$formAddTask = this.shadowRoot.querySelector('.form-add-task');
        this.$formAddTask.onsubmit = (event) => {
            event.preventDefault();
            this.handle();
            this.$formAddTask.reset();
        }
    }
    handle() {
        //Quy trình: Lấy dữ liệu - Validate dữ liệu - Render dư liệu
        //Lấy dữ liệu
        let content = this.$formAddTask.content.value.trim();
        console.log(content);
        
        //Validate dữ liệu
        if (content == "") {
            alert("Input your content");
        } else {
            // firebase.firestore.collection('')
            // Phải lấy được id của cái task list
            //Định nghĩa ra 1 event
            let addTaskEvent = new CustomEvent('add-task-event', {
                bubbles: true,
                detail:{
                        id:'',
                        content: content,
                        isCompleted: false,
                        dateModified:new Date().toISOString()
                }
            });

            // Phát addTaskEvent từ form add task
            this.dispatchEvent(addTaskEvent);
        }

    }
}

window.customElements.define('form-add-task', FormAddTasks)