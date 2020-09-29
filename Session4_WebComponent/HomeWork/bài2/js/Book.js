
import {BookCase} from "./BookCase.js";
import {AddNewBookCase} from "./BookCase.js"

export default class Book extends BookCase{
    bookName;
    author;
    dayPublis;
    type;
    constructor(id,bookName,author,type,dayPublis) {
        super(id);
        this.bookName = bookName;
        this.author = author;
        this.type = type;
        this.dayPublis = dayPublis;
    }
        bookCases = AddNewBookCase
        newBooks = new Array(); 
    addBook(){
       
        let bookName = prompt("Nhập vào tên sách");
        let author = prompt("Tác giả ?");
        let type = prompt("Thể loại sách");
        let date = prompt("Ngày nhập");
        let stringDate = date.split('/');
        let newDate = stringDate.join("/")
        let newBook = new Book(ID,bookName,author,type,newDate);
                 this.newBooks.push(newBook);

    }
    findBook(){
        let findBook = prompt("Nhập vào quyển sách bạn muốn tìm");
                    for (let i = 0; i < this.bookCases.length; i++) {
                        const book = this.bookCases[i];
                                console.log(book[findBook]);
                    }
            }
    showBook(){
        for (let i = 0; i < this.bookCases.length; i++) {
            const element = this.bookCases[i];
            console.log(element["newBooks"]);
                }
            }
    }


