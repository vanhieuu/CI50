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
            //code luoon ham introduce 
        say(){
            alert("Cậu rút bài cho tớ rồi mà :))), t k thích người bằng tuổi")
        }
        introduce(){
            {
                console.log(`Name Crush: ${me[i].name}, Age: ${me[i].age}, Address: ${me[i].address},Appearence: ${me[i].appearence}, Favorites: ${me[i].favorites}`);
                }
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
        introduce(){
            console.log(`Name Ex: ${this.name}, Age: ${this.age}, Address: ${this.address},Appearence: ${this.appearence}`);
        }
    }
    class list {
        owner;
        mainPerson = []; // Dùng mainPerson = new Array() - quản lý bộ nhớ tốt hơn, n sẽ tự giải phóng bộ nhớ
        constructor(owner,mainPerson){
            this.owner = owner;
            this.mainPerson = mainPerson;
        }
        showAll(){
            let me = this.mainPerson;
            let i =  0;

                this.mainPerson.forEach()
        }
            addPer(){
                prompt("Nhập thông tin người mới")
                let name = prompt("Nhập tên");
                let age  = prompt("Tuổi");
                let address = prompt("Nơi ở ");
                let appearence = prompt("Đặc điểm");
                let favorites = prompt("Sở thích");
                let newPer = new Person(name,age,'nữ',address,appearence,favorites);

                this.mainPerson.push(newPer);
            }
    }  
            let newEx = new ex_Lover('Liễu',
                                        20,
                                     'Hoàng Quốc Việt',
                                    'Coffee');
           
                    console.log(newEx);

            let newCr = new Crush('Huyền',21,'Hà Đông','Sweet Voice','Reading');
          
            console.log(newCr);
    
      
    
function User() {
    

let $Owner = prompt("Tên của bạn ? ");
let $main = [];
let listMain = new list($Owner,$main);

listMain.showAll();
    // while(true){
    //     let input = prompt(`Xin chào ${this.$Owner}, đây là khu riêng tư của bạn, là nơi bạn lưu và hiện thông tin của crush và cũng là Ex của bạn
    //                     Để hiện toàn bộ danh sách của bạn - nhập vào 1
    //                     Để thêm crush vào danh sách của bạn - nhập vào 2
    //                     Để thêm ex của bạn vào danh sách - nhập vào 3`);

    //         switch (input) {
    //             case "1":
    //                 listMain.showAll();
    //                 break;
    //             case "2":
    //                 listMain.addPer();
    //                 break;
    //         }
    }
// }
////------------------------------///
User();