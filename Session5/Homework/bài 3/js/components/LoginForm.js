const $template = document.getElementById('template-form-login')
class FormLogin extends HTMLElement{
        constructor(){
            super()
            this.attachShadow({mode:'open'});
            this.shadowRoot.appendChild($template.content.cloneNode(true));
                this.$email = this.shadowRoot.getElementById('email');
                this.$password = this.shadowRoot.getElementById('password');
                        console.log(this);
                this.$formLogin = this.shadowRoot.querySelector('.form-login');
                // this.$formRegister.onsubmit = function (event) {
                    this.$formLogin.onsubmit =  (event) => {
                    console.log(this);
                            event.preventDefault();
                        this.login();
                }
            }
        login(){
           
            let email  = this.$email.value;
            let password = this.$password.value;
           
            ///
            if(this.validate(email,password)){
                alert("đăng nhập thành công ")
            }
        }               
        validate( email, password){
                   let checkKey = true;
                    if(email == ''){
                        this.$email.error ="Nhập vào email"
                        checkKey = false
                    }
                    if(password == ''){
                        this.$password.error ="Nhập vào mật khẩu"
                        checkKey = false;
                        } else{
                            this.$password.error ='';
                        }  
                  
                }
}
window.customElements.define('form-login',FormLogin)
// Bài tập về nhà, phân biện arrow function và function bthg