import Test from "./Test.js"
import ChoiceQuestion from "./ChoiceQuestion.js"
import TextQuestion from "./TextQuestion.js"


export default class App{
    tests;
    questions;
    constructor(){
        this.tests = [];
        this.questions = [];
    }
    addTest(){
            let name = prompt("Input your test name");
            let duration = Number(prompt("Input test duration"));
            let test = new Test(name,duration);
            this.tests.push(test);
            return test;
    }
    updateTest(){
            let id = prompt("Input your test id to udapte");
            let newName = prompt("Input your new name");
            let newDuration = Number(prompt("Input new durations")); 
            let foundTest = this.tests.find(function(test) {
                    return test.id == id;
            });
                if (foundTest != null) {
                    console.log(typeof foundTest);
                    foundTest.updateQuestion(newName,newDuration)
                }
    }
    deleteTest(){

    }
    showTest(){

    }
    addQuestion(){
            let type = prompt(`Input type of question 
                                            1: choice question
                                            2: text question `);
            let content = prompt("Input question content");
            let correctAnswer = prompt("Input correct answer")
                    if(type == "1" )
                    {   
                        question = new ChoiceQuestion(content,correctAnswer);
                    } else if(type == '2'){
                            question = new TextQuestion(content,correctAnswer);
                    }
                        if(question != null){
                            this.questions.push(question)
                        }
            
    }
    updateQuestion(){

    }
    deleteQuestion(){

    }
    showQuestion(){

    }
}