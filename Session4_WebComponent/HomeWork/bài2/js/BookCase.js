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

export class AddNewBookCase{
    bookCases = new Array();
    constructor(bookCase){
        this.bookCase = bookCase;
    }
    addBookCase(){
            let id = prompt("Nhập vào id của tủ sách");
            let maxOfBook = prompt("Nhập vào số lượng sách tối đa ");
            let typeOfBook = prompt("Nhập vào thể loại của tủ sách");
            let date = prompt("Ngày nhập (VD 16/07/2020)");
                let stringDate = date.split("/");
                    let newDate = stringDate.join("/");
                let bookCase = new BookCase(id,maxOfBook,typeOfBook,newDate);
                        this.bookCases.push(bookCase);
    }
    updateBookCase(){
        let i = prompt("Nhập vào id bạn muốn sửa");
        let update = prompt("Nhập vào nội dung muốn sửa ");
            this.bookCases[i-1,1] = update;
    }
    deleteBookCase(){
        let i = prompt("Nhập vào id bạn muốn xóa");
            this.bookCases.splice(i - 1,1);
    }
    showBookCase(){
        for (let i = 0; i < this.bookCases.length; i++) {
            const element = this.bookCases[i];
                        console.log(element);
        }
    }
   
    
}