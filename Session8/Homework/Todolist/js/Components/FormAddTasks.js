const $template = document.getElementById("form-add-task-template");

class FormAddTasks extends HTMLElement{
        addTaskCallback ;
    constructor(){
        super();
        this.attachShadow({mode:'open'});// Có cũng được mà không cũng được
        this.shadowRoot.appendChild($template.content.cloneNode(true));
            this.$formAddTask = this.shadowRoot.querySelector('.form-add-task');
            this.$formAddTask.onsubmit = (event) => {
                    event.preventDefault();
                    this.handle();
            }
    }
    handle(){
        //Quy trình: Lấy dữ liệu - Validate dữ liệu - Render dư liệu
            //Lấy dữ liệu
              let content = this.$formAddTask.content.value.trim();
                console.log(content);

            //Validate dữ liệu
                    if (content == "") {
                        alert("Input your content");
                    }else{
                        // firebase.firestore.collection('')
                        // Phải lấy được id của cái task list
                        this.addTaskCallback();
                        
                    }   
              
    }
}

window.customElements.define('form-add-task',FormAddTasks)