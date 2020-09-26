class Quest {
    id;
    contentQuest;
    correctAnswer;
    constructor(id,contentQuest,correctAnswer){
        this.id = id;
        this.contentQuest = contentQuest;
        this.correctAnswer = correctAnswer;
    }
}
class Choice_Quest extends Quest{
    constructor(id,contentQuest,correctAnswer){
        super(id,contentQuest,correctAnswer)
}
}
class Text_Quest extends Quest{
    constructor(id,contentQuest,correctAnswer){
        super(id,contentQuest,correctAnswer)
}
}
        /// Thêm Choice Question extend Quest
        ///      Text Question extend Quest

class questInitialization{
     questions = new Array (); 
        constructor(questions){
            this.questions = questions;
        }
        addQuestions(){
            let id = prompt("Nhập id câu hỏi");
            let contentQuest = prompt("Nhập nội dung câu hỏi");
            let correctAnswer = prompt("Nhập câu trả lời đúng");
            let $Quest = new Quest(id,contentQuest,correctAnswer);
            this.questions.push($Quest);
        }
        showQuestions(){
            for (let i = 0; i < this.questions.length; i++) {
                const element = this.questions[i];
                console.log(element);
            }
        }
        modifyQuestion(){
            let index = prompt("Nhập id câu hỏi muốn sửa");
            let modify = prompt("Nhập nội dung muốn sửa ");
            this.questions[index -1] = modify
        }
        deleteQuestions(){
            let index = prompt("Nhập id câu hỏi muốn xóa");
            this.questions.splice(index-1,1);
        }

}

export {Quest,questInitialization,Choice_Quest,Text_Quest}
