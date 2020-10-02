
import Action from "./Action.js";

let Persons = [
        {
            'name':'Hiếu',
            'PhoneNumber':962395261,
            'nameLocate': 'Lạng Sơn',
            'PositionX': 3,
            'PositionY': 4,
        },
            {
        'name':'Trang',
        'PhoneNumber':968814702,
        'nameLocate': 'Sơn La',
        'PositionX': 3,
        'PositionY': 4,
            },

]   
       function getPer(Persons){
        for (var i = 0; i < Persons.length ; i++) {
            const Person = Persons[i];
            console.log(`#${i+1}`);
                for (const key in Person) {
                        const value = Person[key];
                        console.log(`${key} : ${value}`)
    }
            }
        }
     function getPhoneNume() {
            let numPhone = Persons.filter(function (v){
                return v.PhoneNumber;
            }) 
            getPer(numPhone);
            
     }
            // let randomPhone = Math.random() * numPhone;
            
            //     console.log(randomPhone);
        
   
        
//     let action = new Action(Persons)
//             let input = prompt("1:Thêm người")
//         if(input == 1){
//             action.addPer
//         }
// }