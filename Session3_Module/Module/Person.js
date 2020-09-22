class Person{
    name;
    age;
    address;

    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

export default Person;
// export mặc định là Person, mỗi module chỉ có 1 default mặc định
// default để export 1 module hoặc 1 function thực hiện 1 chức năng duy nhất
