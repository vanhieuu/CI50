import {getCurrentUser, saveCurrentUserData, validateInputWrapper} from "./ultil.js";
import {md5} from "./ultil.js"
import {getDataDoc} from "./ultil.js"
let $template = document.getElementById('form-login-template');
    class LoginForm extends HTMLElement{
        constructor(){
            super()
            this.attachShadow({mode:"open"});
            this.shadowRoot.appendChild($template.content.cloneNode(true));
            this.$formLogin = this.shadowRoot.querySelector('.form-login');
            this.$email = this.shadowRoot.querySelector('#email');
            this.$password = this.shadowRoot.querySelector('#password');
            
            this.$formLogin.onsubmit = (event) =>{
                event.preventDefault();
                this.handle();
            }
    }
    async handle(){
        let email = this.$email.value;
        let password  = this.$password.value;
        if(this.validate(email,password)){
                 let  result = await firebase.firestore()
                                         .collection('User')
                                         .where('email','==',email )
                                         .where('password', '==',md5(password))
                                         .get();
                if(result.empty){
                    alert("Email hoặc mật khẩu không chính xác ");
            
                }else{
                    // alert('Đăng nhập thành công')
                    // let tmp = result.docs[0];
                    // let tmpData = tmp.data();
                    // delete tmpData.password;
                    // console.log(tmp.id , tmpData);
                    console.log(getDataDoc(result.docs[0],['password']));
                    saveCurrentUserData(getDataDoc(result.docs[0],['password']))
                    getCurrentUser();
                }
                                        }   
    }
    validate(){
            let isPassed = validateInputWrapper(this.$email,(value) => value != '','Nhập vào email')
                     & validateInputWrapper(this.$password, (value) => value != '', "Nhập vào password");
            return isPassed
    }

}
    

window.customElements.define('form-login',LoginForm)