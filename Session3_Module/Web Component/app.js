// let $hello = document.getElementById('hello');
// console.log($hello instanceof HTMLDivElement);

class MyProfile extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = `
            <div class = 'profile-container'>
                <div id = "name">Hiếu</div>
                <div id = "age">21</div>
                <div id = "sex">Nam</div>
                <div id = "address">Lạng Sơn</div>
            
            </div>
        `;
    }
}
// Định nghĩa 1 Custom Elements
window.customElements.define('my-profile',MyProfile);