export default class Question {
    id;
    content;
    correctAnswer;
    dateModify;
    constructor(content,correctAnswer){
        this.content = content;
        this.id = uuid.v4();
        this.correctAnswer = correctAnswer;
        this.dateModify = new Date().toISOString();
    }
    update(content,correctAnswer){
            this.content = content;
            this.correctAnswer = correctAnswer;
            this.dateModify = new Date().toISOString();

    }

}