import Person from "./Person.js";

export default class Action{
    Data = new Array;
        constructor(Data){
            this.Data = Data
        }
    showPer(){
        let show = this.Data;
            for (let i = 0; i < show.length; i++) {
                const element = show[i];
                    console.log(i+1,element);
            }
    }
    addPer(){
        let newPer = this.Data;
            let amount = Number(prompt('Nhập số lượng người'));
                    for (let i = 0; i < amount; i++) {
                        let addPer = new Person(
                          prompt(`Nhập tên ${i+1}:`),
                          Number(prompt("Nhập vào số điện thoại: ")),
                          prompt("Nhập vào địa điểm"),
                          Numeber(prompt("Nhập vào tọa độ X")),
                          Numeber(prompt("Nhập vào tọa độ Y")),    
                        );
                        newPer.push(addPer);
                      }
    }
    listPer(){
        let listPer = this.Data;
            for (let i = 0; i < listPer.length; i++) {
                const Pers = listPer[i];
                        console.log(Pers);
                
            }
    }
}