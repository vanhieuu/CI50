import Book from "./Book.js";
export default class BookCase{
    id;
    maxOfBook;
    typeOfBook;
    dayCreat;
    constructor(id,maxOfBook,typeOfBook,dayCreat) {
        this.id = id;
        this.dayCreat = dayCreat;
        this.maxOfBook = maxOfBook;
        this.typeOfBook  = typeOfBook;
    }
   
}