class Person{
    name;
    age;
    sex;
    address;
    
    constructor(name,age,sex,address){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
            }
    speak(){
        console.log("Hello Guys");
    }
    introduce(){
        console.log(`Hi, my name is ${this.name}, 
                        i'm ${this.age} years old
                            i'm ${this.sex} and i live in ${this.address}`);
    }
    }

    class Crush extends Person {
        appearence;
        favorites;
            constructor(name,age,address,appearence,favorites){
                super(name,age,'female',address);
                this.appearence = appearence;
                this.favorites = favorites;
            }
        say(){
            alert("Cậu rút bài cho tớ rồi mà :))), t k thích người bằng tuổi")
        }
    }
    class ex_Lover extends Person{
        favorites;
        constructor(name,age,address,favorites){
            super(name,age,'female',address);
            this.favorites = favorites;
        }
        think(){
            document.write("E chán r ")
        }
    }
    class list {
        owner;
        mainPerson = [];
        constructor(owner,mainPerson){
            this.owner = owner;
            this.mainPerson = mainPerson;
        }
        showAll(){
            let me = this.mainPerson;
            let i =  0;
            while(true){
                if ( me[i]  == undefined){
                    break;
                } else{
                    if(me[i].favorites == undefined){
                        console.log(`Name Ex: ${me[i].name}, Age: ${me[i].age}, Address: ${me[i].address},Appearence: ${me[i].appearence}`);
                        
                    }else{
                        console.log(`Name Crush: ${me[i].name}, Age: ${me[i].age}, Address: ${me[i].address},Appearence: ${me[i].appearence}, Favorites: ${me[i].favorites}`);
                        }
                        i++
                    }
             
                }
            }
        addEx(){
            alert("Nhập thông tin về Ex của bạn");
            let nameEx = prompt("Tên là  ?");
            let ageEx = prompt("Tuổi ?");
            let addressEx = prompt("Đang ở  ? ");
            let favorites = prompt("Sở thích là ?");
            let newEx = new ex_Lover(nameEx,ageEx,addressEx,favorites);
            this.mainPerson.push(newEx);
        }
        addCr(){
            alert('Nhập thong tin về Crush của bạn');
            let nameCr = prompt("Tên crush của bạn ?");
            let ageCr = prompt("Tuổi của cr ?");
            let addressCr = prompt("Cr bạn đang ở ?");
            let favoritesCr = prompt("Sở thích của cr bạn là gì ??");
            let appearenceCr = prompt("Em/Bạn/Chị ấy có điểm nổi bật nào khiến bạn Cr ?");
            let newCr = new Crush(nameCr,ageCr,addressCr,appearenceCr,favoritesCr);
            this.mainPerson.push(newCr);
        }
    }

let $Owner = prompt("Tên của bạn ? ");
let $main = [];
let listMain = new list($Owner,$main);
    while(true){
        let input = prompt(`Xin chào ${this.$Owner}, đây là khu riêng tư của bạn, là nơi bạn lưu và hiện thông tin của crush và cũng là Ex của bạn
                        Để hiện toàn bộ danh sách của bạn - nhập vào 1
                        Để thêm crush vào danh sách của bạn - nhập vào 2
                        Để thêm ex của bạn vào danh sách - nhập vào 3`);

            switch (input) {
                case '1':
                    listMain.showAll();
                    break;
                case '2':
                    listMain.addCr();
                    break;
                case '3':
                    listMain.addEx();
                    break;
            }
    }
