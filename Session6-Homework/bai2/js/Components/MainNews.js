const $template = document.getElementById("main-news");
    class MainNews extends HTMLElement {
        constructor(){
            super();
            this.attachShadow({mode:'open'});
            this.shadowRoot.appendChild($template.content.cloneNode(true));
       
            this.$link = this.shadowRoot.getElementById("link");
            this.$tittle = this.shadowRoot.getElementById("tittle")
            this.img = this.shadowRoot.getElementById("img");
        }
    static get observedAttributes(){
        return ['link',"tittle","img"]
    }
        attributeChangedCallback(name, old ,newValue){
                if (name == 'link') {
                    this.$link.innerHTML = newValue;
                }else if(name == 'tittle') {
                        this.$tittle.innerHTML = newValue;
                }else if(name == "img"){
                    this.$img.innerHTML = newValue;
                }
        }
    }
    window.customElements.define("main-news", MainNews)