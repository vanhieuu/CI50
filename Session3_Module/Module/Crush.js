import Person from './Person.js';
// Bỏ ngoặc nhọn nếu export default
// import {Person} from './Person.js';
class Crush extends Person{
    favorites;
    appearence;
    constructor(name,age,address,favorites,appearence){
        super(name,age,address);
        this.favorites  = favorites;
        this.appearence = appearence;
    }
}
export default Crush;