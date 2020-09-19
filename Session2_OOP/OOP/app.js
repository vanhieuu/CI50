 // Class: bản thiết kế để tạo 1 object

//     class Persons{
//         name;
//         age;
//         sex;
//         appearence;
        
//         constructor(name,age,sex,appearence){
//                 console.log(name,age,sex,appearence);
//                 this.name = name;
//                 this.age = age;
//                 this.sex = sex;
//                 this.appearence = appearence;
// }        
         //Hàm khởi tạo
//         say(){
//             console.log('hello world');
//         }

//         introduce(){
//             console.log(`
//                 Hello.
//                 Mình là ${this.name},
//                 năm nay mình ${this.age} tuổi,
//                 mọi người hay gọi mình là ${this.appearence}
//                    `);
//         }

//     }
        // Khi chạy hàm new Persons thì chương trình  sẽ chạy hàm constructor

//Object: được đẻ từ class (instance của 1 class)

    // let Hieu = new Persons('Hiếu',20,'male','husky');
    //     Hieu.say();
    //     Hieu.introduce();
        // Hieu.name = "Hiếu";
        // Hieu.age = 20;
        // Hieu.sex = "Male";
        // Hieu.appearence = "Husky";

    // console.log(Hieu);

    // bài tập, hãy khai báo, khởi tạo Class  Car có đặc tính sau
    // Brand, Owner, price, Buy - at , Color, troll(), introduce


    // class Cars {
    //     Brand;
    //     Owner;
    //     Price;
    //     Color;
       
    //     constructor(Brand,Owner,Price,Color){
    //         this.Brand = Brand;
    //         this.Owner = Owner;
    //         this.Price = Price;
    //         this.Color = Color;

    //     }

    //     Troll(){}
    //     introduce(){
    //         console.log(`
    //         Hồ tây nhún nhảy cùng ${this.Owner},
    //         bên trong xe ${this.Brand} màu ${this.Color} ༼ つ ◕_◕ ༽つ`);
    //     };
    // }   

    // let car = new Cars();
    //         car.Brand = prompt("Tên xe");
    //         car.Owner = prompt("Người sở hữu");
    //         car.Price = prompt("Gía");
    //         car.Color = prompt("Màu xe");
    //         car.introduce();
                 
            // Cars.introduce(prompt("giới thiệu"));
    // console.log(car);


    class Persons{
        name;
        age;
        sex;
        address;

        constructor(name, age, sex,address){
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.address = address;
                }

            speak(){
            console.log("Chào em,a đứng đây từ chiều");
            }

    }

    class Boy extends Persons{
                size;
                constructor(name, age ,address, size){
                    super(name, age,'male',address);
                            this.size = size;
                }
    }
    let Hieu = new Boy('Hiếu', 20, 'Vĩnh Tuy', 'xl')
    console.log(Hieu);


    class goodBoy extends Boy{
           static slogan = "FriendZone nữa FriendZone mãi"
                friendZone;
                constructor(name,age,address,size,friendZone){
                    super(name,age,address,size);
                    this.friendZone = friendZone;
    }
        speak(){
            console.log("Chào em,a đứng đây từ tối qua");
        }


            static live(){
                console.log('loneyly (╯°□°）╯︵ ┻━┻');
            }

}
        let Huy = new goodBoy('Huy',20,'Vĩnh Hưng','xl',true)
        console.log(Huy);
        // Huy.speak();
        console.log(goodBoy.slogan);
        goodBoy.live();


        
    class badBoy extends Boy{
                overNight;
                constructor(name,age,address,size,overNight){
                    super(name,age,address,size);
                    this.overNight = overNight;
    }

            speak(){
                console.log("ONS K Em");
            }
    }
        
    class bigCityBoiz extends Boy{
        deterioration;
        constructor(name,age,address,size,deterioration){
            super(name,age,address,size);
            this.deterioration = deterioration;
}
          static  speak(){
                console.log("Nếu mà ngoan em sẽ bị thương, nếu mà hư e sẽ được phạt");
            }
    }
    class boiDauMoi extends Boy{
        dauCatMoi;
        constructor(name,age,address,size,dauCatMoi){
            super(name,age,address,size);
            this.dauCatMoi = dauCatMoi;
}

speak(){
    console.log("Vai loz luon dau cat moi");
}
    }

let Ha = new badBoy('Hạ',22,'Đông Anh','xl', 'yes');
console.log(goodBoy.slogan);
// Ha.speak();
let Dat = new bigCityBoiz('Đạt',23,'Minh Khai','xl','100%');
console.log(Dat);
// Dat.speak();
let My = new boiDauMoi("Mỹ",20,'Long Biên','s','Cắt moi vclllll');
console.log(My);
// My.speak();


class Crush{
    firstName;
    lastName;
    age;
    address;
    sex;
    constructor(firstName,lastName,age,address,sex){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.sex = sex;
    }
    get fullName(){
        return this.lastName + ' ' + this.firstName;
    }
}
let myCrush = new Crush ('Trang','Điêu Huyền',20,'Kiến Trúc','female');
console.log(myCrush.fullName);



// Nếu sử dụng Static vs Attribute của Class
// non-static vs Attribute - của Object đc tạo từ class
// Method - Static -> phương thức của Class