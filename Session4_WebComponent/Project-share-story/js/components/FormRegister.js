    const $template = document.getElementById('template-form-register')
class FormRegister extends HTMLElement{
        constructor(){
            super()
            this.attachShadow({mode:'open'});
            this.shadowRoot.appendChild($template.content.cloneNode(true));
                this.$name = this.shadowRoot.getElementById('name');
                this.$email = this.shadowRoot.getElementById('email');
                this.$password = this.shadowRoot.getElementById('password');
                this.$passwordConfirmation = this.shadowRoot.getElementById('password-confirmation');
                        console.log(this);
                this.$formRegister = this.shadowRoot.querySelector('.form-register');
                // this.$formRegister.onsubmit = function (event) {
                    this.$formRegister.onsubmit =  (event) => {
                    console.log(this);
                            event.preventDefault();
                        this.register()
                }
            }
        register(){
            let email = this.$email.value;
            let name  = this.$name.value;
            let password = this.$password.value;
            let passwordConfirmation = this.$passwordConfirmation.value
            ///
            if(this.validate(name,email,password,passwordConfirmation)){
                alert("đăng kí thành công ")
            }
        }               
        validate(name, email, password, passwordConfirmation){
                if(name == ''){
                    this.$name.error ="Nhập vào tên"
                    isPassed = false;
                    } else{
                        this.$name.error ='';
                    }      
                    if(email == ''){
                        this.$email.error ="Nhập vào email"
                        isPassed = false
                    }
                    if(password == ''){
                        this.$password.error ="Nhập vào mật khẩu"
                        isPassed = false;
                        } else{
                            this.$password.error ='';
                        }  
                    if(passwordConfirmation != password){
                            this.$passwordConfirmation.error ="Không trùng khớp với mật khẩu";
                            isPassed = false;
                    }else{
                        this.$passwordConfirmation = ""
                    }
                }
}
window.customElements.define('form-register',FormRegister)
// Bài tập về nhà, phân biện arrow function và function bthg