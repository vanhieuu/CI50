const $template = document.getElementById("task-container-template");

class TaskContainer extends HTMLElement{
            id ='';
            content='';
            dateModified='';
            isCompleted='';
            editMode = false;
            delete ;
        constructor(id,content,dateModified,isCompleted){
        
            super();
            this.attachShadow({mode:"open"});
            this.shadowRoot.appendChild($template.content.cloneNode(true));
            this.$id = this.shadowRoot.getElementById("id");
            this.$isCompleted = this.shadowRoot.getElementById("is-completed");
            this.$content = this.shadowRoot.getElementById("content");
            this.$dateModified = this.shadowRoot.getElementById('date-modified');
            this.$edit = this.shadowRoot.getElementById('btn-edit')
                this.$edit.onclick = () =>{
                    this.changeEditMode();
                }
            this.$delete = this.shadowRoot.getElementById('btn-delete')
                    this.$delete.onclick = () =>{
                        // this.remove();
                        this.deleteTask();
                        this.render();
                    }

                
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
        updateTask(){
                this.content = this.$content.innerHTML;
               let  updateTaskEvent= new CustomEvent('update-task-event',{
                    bubbles:true,
                    detail:{
                        id: this.id,
                         content: this.content,

                    }
                });
                this.dispatchEvent(updateTaskEvent);
            }
        changeEditMode(){
                this.editMode =! this.editMode;
                this.render();
            }
    
        render(){
            this.$content.innerHTML = this.content;
            this.$dateModified.innerHTML = this.dateModified;
          
            if (this.editMode ) {
                    this.renderEditTable();
            }else{
                    this.renderReadOnly();
            } 
        }
        renderReadOnly(){
          
            this.$content.contentEditable = false
            this.$isCompleted.checked = this.isCompleted;
                this.$isCompleted.style.display = 'inline-block'
                this.$edit.innerHTML = 'Edit'
                this.$edit.onclick = () =>{
                    this.changeEditMode();
                }
        }
        renderEditTable(){
                
                this.$content.contentEditable = true;
                this.$isCompleted.style.display = 'none';
                this.$edit.innerHTML  = 'Save';
                this.$edit.onclick = () =>{
                    this.updateTask();
                    this.changeEditMode();
                }
        }
        deleteTask(){
              let deleteTaskEvent = new CustomEvent('delete-task-even',
              {bubbles:true,
                detail:{
                    id: this.id
                }
              });
              this.dispatchEvent(deleteTaskEvent);
              this.remove();
        }
    }

window.customElements.define('task-container', TaskContainer);