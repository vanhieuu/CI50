const $template = document.getElementById('template-input-wrapper')

class InputWrapper extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$label = this.shadowRoot.getElementById('input-label')
        this.$input = this.shadowRoot.getElementById('input-main');
        this.$error = this.shadowRoot.getElementById('input-error')
        
        
    }
    static get observedAttributes(){
                return ['label','type','error','value']
    }  
        attributeChangedCallback(attrName, oldValue, newValue){

                    if (attrName == 'label') {
                            this.$label.innerHTML =  newValue;
                    } else if(attrName == 'type'){
                            this.$input.type = newValue;
                    }else if(attrName == 'error'){
                            this.$error.innerHTML = newValue;
                    }else if(attrName == 'value'){
                            this.$input.value = newValue;
                    }                
        }
        get value(){
            return this.$input.value;
        }
        set error(message){
            this.setAttribute('error',message);
        }
       
}
window.customElements.define('input-wrapper',InputWrapper);