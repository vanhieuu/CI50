export default class Book{
    id;
    bookName;
    author;
    dayPublis;
    type;
    constructor(id,bookName,author,type,dayPublis) {
        this.id = id;
        this.bookName = bookName;
        this.author = author;
        this.type = type;
        this.dayPublis = dayPublis;
    }
}