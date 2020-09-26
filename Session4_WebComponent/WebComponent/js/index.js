class MyProfiles extends HTMLElement{
        constructor(){
            super();
                this.attachShadow({mode: 'open'})
              
                let $template = document.getElementById("my-profile")
                    this.shadowRoot.appendChild($template.content.cloneNode(true));
                        //lấy ra thẻ có id là name trong shadow root    
                    this.$name = this.shadowRoot.getElementById('name');
                    this.$age = this.shadowRoot.getElementById('age');
                    this.$address = this.shadowRoot.getElementById('address');
                    this.$avatar = this.shadowRoot.getElementById('avatar');                    

        }

        // liệt kê những thuộc tính ảnh hưởng đến thẻ
        static get observedAttributes(){
                return ['name','age','address'];
        }
        /**
         * Khi mà có thuộc tính trong observedAttributes thay đổi thì phương thức bên dưới sẽ được gọi
         * @param string name 
         * @param string oldValue 
         * @param string newValue 
         * 
         */
        attributeChangedCallback(name, oldValue, newValue){
    //  console.log(`
    //             Thuộc tính ${name} vừa thay đổi giá trị từ
    //                      ${oldValue} sang ${newValue} `); 

                    if (name == 'name'){
                        this.$name.innerHTML = newValue;
                    } else if(name == 'age'){
                        this.$age.innerHTML = newValue;
                            } else if(name == 'address'){
                                this.$address.innerHTML = newValue;
                            }   else if(name == 'avatar'){
                                this.$avatar.src = newValue;
                            }
}
}
    // Nội dung của thẻ do thuộc tính quyết định
    // Khi mà thay đổi giá trị thuộc tính thì nội dung cũng thay đổi theo
window.customElements.define('my-profile', MyProfiles);

//.profile-container > *