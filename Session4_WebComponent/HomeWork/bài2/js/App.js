import Book from "./Book.js";
import BookCase from "./BookCase.js";
export default class App{
    book;
    bookCase;
    constructor(){
        this.book = new Array();
        this.bookCase = new Array();
    }

    /**  if (_.isEmpty(id)) {
    //         document.getElementById('id-error').innerHTML = "Vui lòng nhập id sách !!"
    //             }           
    //         else if(bookName.length <= 1){
    //             document.getElementById('id-error').innerHTML = "ID là 4 số cuối mã vạch sau sách !!"
    //                 bookName ='';
    //                 }
    //             else{
    //                  document.getElementById('bookName-error').innerHTML = "";  
    //                 }

    // if (_.isEmpty(bookName)) {
    //         document.getElementById('bookName-error').innerHTML = "Vui lòng nhập tên sách !!"
    //             }           
    //         else if(bookName.length <= 2){
    //             document.getElementById('bookName-error').innerHTML = "Không được nhỏ hơn 2 ký tự !!"
    //                 bookName ='';
    //                 }
    //             else{
    //                  document.getElementById('bookName-error').innerHTML = "";  
    //                 }


    // if (_.isEmpty(author)) {
    //         document.getElementById('author-error').innerHTML = "Vui lòng nhập tên tác giả !!"
    //                 }
    //         else if(author.length <= 2){
    //             document.getElementById('author-error').innerHTML = "Không được nhỏ hơn 2 ký tự !!"
    //                     author ="";
    //                     }
    //                     else{
    //                         document.getElementById('author-error').innerHTML = "";  
    //                     }


    // if (_.isEmpty(type)) {
    //         document.getElementById('type-error').innerHTML = "Vui lòng nhập thể loại !!"
    //                     }
    //         else if(bookName.length <= 2){
    //             document.getElementById('type-error').innerHTML = "Không được nhỏ hơn 2 ký tự !!"
    //                     type ="";
    //                         }
    //                         else{
    //                             document.getElementById('type-error').innerHTML = "";  
    //                         }


    // if (_.isEmpty(date)) {
    //         document.getElementById('date-error').innerHTML = "Vui lòng đúng định dạng ngày !!"
    //             }
    //         else if(bookName.length <= 2){
    //                 document.getElementById('date-error').innerHTML = "Vui lòng nhập lại !!"
    //                      date ="";
    //                          }
    //                  else{
    //                     document.getElementById('date-error').innerHTML = "";  
    //                             }
    //                     if(id && bookName && author && type && date){                        
    //                         console.log(bookName,author,type,newDate);
        
    // }
    //     }
*/
        addBook(){
            let newBook = new Book(id,bookName,author,type,newDate);
        this.newBooks.push(newBook);

              let tableContent = `<tr>
            <td>#</td>
            <td>ID</td>
            <td>Tên Sách</td>
            <td>Thể Loại</td>
            <td>Tác Gỉa</td>
            <td>Ngày nhập</td>
                         </tr>`
            let maxBook = `<h3>Your Book Case 0/20 </h3>`;
        this.newBooks.forEach((newBooks,i) => {
            i++;
            if (i > 20) {
                alert("Qúa giới hạn của sách ")
            }
            maxBook = `<h3>Your Book Case ${i}/20 </h3>`;
            tableContent += `<tr>
            <td>${i}</td>
            <td>${newBooks.id}</td>
            <td>T${newBooks.bookName}</td>
            <td>${newBooks.author}</td>
            <td>${newBooks.type}</td>
            <td>${newBooks.date}</td>
                         </tr>`
    })
    document.getElementById('list-books').innerHTML = tableContent;
        }
}
