// let input1 = prompt("Nhập vào chuỗi 1 ");
// let input2 = prompt("Nhập vào chuỗi 2 ");
// let arr1 =input1.split("");
// let arr2 = input2.split("");
function compareString(str1,str2) {
    let strArr1 = str1.split("");
    let strArr2 = str2.split("");
        for (let i = 0; i < strArr1.length; i++) {
            const element1 = strArr1[i];
               for (let j = 0; j < strArr2.length; j++) {
                        const element2 = strArr2[j];
                            if (element1 == element2) {
                                    strArr1[i] ="";
                                    strArr2[j] ="";
                                    break;
                              }
                            }
                         }   
                        
                         return strArr1.join("") == strArr2.join("");
                        }


