import {Quest,questInitialization,Essay,Choice} from './quest.js';
import {testInitialization} from "./creatTest.js";

let arr1 = new Array();
let arr2 = new Array();
let newTesting = new testInitialization(arr1);
let newQuests =new questInitialization(arr2);
    while(true){
        let request = prompt(`Nhập vào yêu câu của bạn:
                                    -----------------------
                                    1 - thêm câu hỏi
                                    2 - Hiển thị câu hỏi
                                    3 - Sửa nội dung câu hỏi
                                    4 - Xóa câu hỏi
                                    5 - Khởi tạo bài Test
                                    6 - Hiển thị bài Test
                                    7 - Kết thúc
                                    ------------------------`);
                if(request == '1')
                    {
                        newQuests.addQuestions();
                    }
                    else if(request == '2')
                    {
                        newQuests.showQuestions();
                        
                    }
                     else if(request == '3')
                    {
                        newQuests.modifyQuestion();
                    }
                    else if(request == '4')
                    {
                        newQuests.deleteQuestions();
                    }
                    else if(request == '5')
                    {
                        newTesting.addnewTest()
                    }
                    else if(request == '6')
                    {
                        newTesting.showAllTest()
                    }
                else if(request == '7'){
                        break;
                }
                else{
                    alert("Sai cú pháp");
                    break;
                }

                }
              
                
    
    