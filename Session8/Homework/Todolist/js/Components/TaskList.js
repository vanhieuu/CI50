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
        this.$name = this.shadowRoot.getElementById('name');
        this.$dateModified = this.shadowRoot.getElementById("date-modified");
        this.$tasks = this.shadowRoot.getElementById('tasks')
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
    setTasks(tasks) {
        this.tasks = tasks;
        this.render();
    }
    

    //==============================================\\
    addTask() {

    }
    //==============================================\\

    updateTask() {

    }
    //==============================================\\

    render() {
        this.$name.innerHTML =  'Task list: ' + this.id;
        this.$dateModified.innerHTML = this.dateModified;
        this.$tasks.innerHTML = this.tasks.map((task) => {
          return `<task-container id="${task.id}" 
                                     content ="${task.content}" 
                                        is-completed ="${task.isCompleted}" 
                                        date-modified = "${task.dateModified}"> 
                    </task-container>`
        }).join('');
    }
    //==============================================\\

    deleteTask() {

    }

}
window.customElements.define('task-list', TaskList)