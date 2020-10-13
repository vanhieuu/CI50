const $template = document.getElementById("task-container-template");

class TaskContainer extends HTMLElement{
            id ='';
            content='';
            dateModified='';
            isCompleted='';
        constructor(id,content,dateModified,isCompleted){
            // this.id = id;
            // this.content = content;
            // this.dateModified = dateModified;
            // this.isCompleted = isCompleted;
            super();
            this.attachShadow({mode:"open"});
            this.shadowRoot.appendChild($template.content.cloneNode(true));
            this.$id = this.shadowRoot.getElementById("id");
            this.$isCompleted = this.shadowRoot.getElementById("is-completed");
            this.$content = this.shadowRoot.getElementById("content");
            this.$dateModified = this.shadowRoot.getElementById('date-modified');
        }
    static get observedAttributes(){
        return ['id','content','date-modified','is-completed'];
    }
    
    // Gán lại giá trị cho thuộc tính
    attributeChangedCallback(name,old,newVal){
                switch(name){
                    case 'content':{
                        this.content = newVal
                    }
                    break;

                    case 'date-modified':{
                        this.dateModified = newVal
                    }
                        break;
                       
                    case 'is-completed':
                        // let a = ( 1 == 1 )
                        // let b = (1 == 2 ) 
                        this.isCompleted = newVal.toLowerCase()== 'true';
                        break;
                        
                    case 'id':
                            this.id = newVal;
                        break;
                    default:
                }
                this.render();
        }
        // Làm nhiệm vụ hiển thị nội dung và bắt sự kiện cho các element nằm bên trong 
        render(){
            this.$content.innerHTML = this.content;
            this.$dateModified.innerHTML = this.dateModified;
            this.$isCompleted.checked = this.isCompleted;
            
        }
}
window.customElements.define('task-container', TaskContainer);