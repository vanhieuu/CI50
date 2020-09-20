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
        favorite;
            constructor(name,age,address,appearence,favorite){
                
            }
    }