 function md5(string){
    return CryptoJS.MD5(string).toString();
}
 function validateInputWrapper(inputWrapper, condition, message){
        let value =  inputWrapper.value;
        if (condition(value)){
            inputWrapper.error = '';
            return true;

        }else{
            inputWrapper.error = message;
            return false;
        }
    }
function getDataDoc(doc, excepts = []){
        let data = doc.data();
        data.id = doc.id;
       for(let except of excepts){
           delete data[except];
       }
       return data;
}
function saveCurrentUserData(userData){
    localStorage.setItem("current-user", JSON.stringify(userData));
//    JSON.parse("email");
}
function getCurrentUser(){
    return JSON.parse(localStorage.getItem('current-user'))
}
    export {validateInputWrapper,md5,getDataDoc,saveCurrentUserData,getCurrentUser}