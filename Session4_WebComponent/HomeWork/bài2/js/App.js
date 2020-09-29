import Book from "./Book.js";
import  {AddNewBookCase} from "./BookCase.js";
import BookCase from "./BookCase.js";

        let newBook = new Array();
        let newBookCase = new Array();
        let adminBook = new Book(newBook)
        let adminBookCase = new AddNewBookCase(newBookCase)
    while(true){
        let action = prompt(`Chọn chức năng:
                                        1 - Thêm Tủ Sách
                                        2 - Sửa Tủ Sách
                                        3 - Xóa Tủ Sách
                                        4 - Hiển thị tủ sách
                                        5 - Thêm Sách
                                        6 - Tìm Sách
                                        7 - Hiển thị tủ sách`)
                                    
                if(action == '1'){
                    adminBookCase.addBookCase();
                }
               else if(action == '2'){
                    adminBookCase.updateBookCase();
                }
               else if(action == '3'){
                    adminBookCase.deleteBookCase();
                }
               else if(action == '4'){
                    adminBookCase.showBookCase();
                }
               else if(action == '5'){
                    adminBook.addBook();
                }
               else if(action == '6'){
                    adminBook.findBook();
                }   
               else if(action == '7'){
                    adminBook.showBook();
                }               
               else if(action == '8'){
                    break;
                }                     
            }
    
    //   if (_.isEmpty(id)) {
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
    // 
    // 
    