class Test {
    id;
    name;
    timeLimit;
    dayCreat;
    numQuest;
    constructor(id,name,timeLimit,dayCreat,numQuest) {
        this.id = id;
        this.name = name;
        this.timeLimit = timeLimit;
        this.dayCreat = dayCreat;
        this.numQuest = numQuest;
    }
}
class testInitialization {
    test = new Array();
    constructor(test) {
        this.test = test;
    }

addnewTest(){
    let id = prompt('Nhập id của bài Test');
    let name = prompt("Nhập tên của bài test");
    let timeLimit = prompt("Nhập giới hạn thời gian");
    let dayCreat = prompt("Nhập ngày tạo");
    let numQuest = prompt("Nhập số lượng câu hỏi");
    let $test  = new testInitialization(id,name,timeLimit,dayCreat,numQuest);
    this.test.push($test);
}
showAllTest(){
    for (let i = 0; i < this.test.length; i++) {
        const numberOfTests = this.test[i];
                console.log(numberOfTests);
        }       
    }
}
export {Test,testInitialization}
