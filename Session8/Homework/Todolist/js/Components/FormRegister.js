import {md5} from "./ultil.js";

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

                this.$formRegister = this.shadowRoot.querySelector('.form-register');
                // this.$formRegister.onsubmit = function (event) {
                    this.$formRegister.onsubmit =  (event) => {
                            event.preventDefault();
                        this.register()
                }
                // this.$loginLink = this.shadowRoot.getElementById('login-link');
                // this.$loginLink.onclick = () =>{
                //     router.navigate('/sign-in');
                // }
            }
        async register(){
            let email = this.$email.value;
            let name  = this.$name.value;
            let password = this.$password.value;
            let passwordConfirmation = this.$passwordConfirmation.value
            ///
            // if(this.validate(name,email,password,passwordConfirmation)){
            //     alert("đăng kí thành công ")
            //     firebase.firestore().collection("User").add({
            //         name:name,
            //         password:password,
            //         email:email
            //     })
            
            let result = await firebase
                                .firestore()
                                .collection('User')
                                .where('email','==',email)
                                .get();
                    if(result.empty){
                        //thêm 1 doc vào collection User
                       let newUser = await firebase.firestore().collection('User').add({
                            name: name,
                            email: email,
                            password: md5(password)
                        });
                        console.log(newUser);
                        //Tạo 1 document task list tương ứng vừa tạo 
                        await firebase.firestore()
                                        .collection('Task-lists')
                                        .add({
                                            task:[],
                                            dateModified: new Date().toISOString(),
                                            owner : newUser.id,
                                        });
                        alert('bạn đã đăng ký thành công')
                    }else{
                        alert('tài khoản này đã được đăng ký'); 
                    }
            
        }               
        validate(name, email, password, passwordConfirmation){
                let isPassed = true
                if(name == ''){
                    this.$name.error ="Nhập vào tên"
                    isPassed = false;
                    } else{
                        this.$name.error ='';
                    }      
                    if(email == ''){
                        this.$email.error ="Nhập vào email"
                        isPassed = false;
                    }
                    if(password == ''){
                        isPassed = false;
                        this.$password.error ="Nhập vào mật khẩu"
                      
                        } else{
                            this.$password.error ='';
                        }  
                    if(passwordConfirmation != password || passwordConfirmation == ""){
                            this.$passwordConfirmation.error ="Không trùng khớp với mật khẩu";
                                isPassed = false;
                    }else{
                        this.$passwordConfirmation = ""
                    }
                    return isPassed;
                }
            }
               


window.customElements.define('form-register',FormRegister)
// Bài tập về nhà, phân biện arrow function và function bthg
