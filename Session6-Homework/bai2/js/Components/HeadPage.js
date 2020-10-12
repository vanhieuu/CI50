    const $template = document.getElementById("head-page")
        class HeadPage extends HTMLElement{
            constructor(){
                super();
                this.attachShadow({mode:"open"});
                this.shadowRoot.appendChild($template.content.cloneNode(true));
                    this.$hello.shadowRoot = this.shadowRoot.getElementById("hello");
                    this.$imgHead.shadowRoot = this.shadowRoot.getElementById("img-head");
            }
            static get observedAttributes(){
                return ["hello" , "img-head"];
            }
            attributeChangedCallback(name,old,newValue){
                if (name == "hello") {
                        this.$hello.innerHTML = newValue;
                }
                else if(name == "img-head"){
                        this.$imgHead.innerHTML = newValue
                }
            }
        }
        window.customElements.define("head-page",HeadPage);