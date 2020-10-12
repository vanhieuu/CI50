//Callback là 1 function được truyền vào 1 function khác dưới dạng tham số
    // let tenFn =  () => {

    // }
    // Cú pháp khai báo arrow function


    
    // setTimeout(() => {
    //         console.log("Viec 1 ");
    //         let x = 5;
    //             x = x * 2;
    //         function ketqua(x){
    //             x = x + 5;
    //             console.log(x);
    //         } 
    //         ketqua(x);
    //         },2000)
    
    // MicroStack

    // Khai báo promise
//     const prom = new Promise(
//             // Excutor
//             /*
//             có 3 trạng thái: 
//                     pending: khi khai báo mà chưa chạy 
//                     resolve: khi mà trả về 1 kết quả nào đó của prômise
//                     reject:
//             */
//         (resolve,reject) => {
//             if(true){
//             resolve( 5)
//             }else{
//                 reject("lỗi rồi");
//             }
//     });

// // chế thêm lỗi

//     prom.then(function(data){

//         // console.log(data*10);
//         // return data * 100;
//         return new Promise(
//             (resolve,reject) => {
//                 if(true){
//                 resolve(data * 5)
//                 }else{
//                     reject("lỗi rồi");
//             }
//         }
//     );

//     }).then(function (ketqua){
//             // console.log(ketqua);
//             return ketqua / 100;

//     }).then(function (kqqq) {
//         console.log(kqqq * 1000);
//     })
//         .catch(function (error){
//         console.log(error);
//     });

    // khi mà resolve chạy n sẽ truyền giá trị vào then, bên trong then có 1 function, cái fuction bên trong sẽ nhận tham số bên trong resolve chuyển thành giá trị của n, trong trường hợp này là data
    // .then bên dưới thì sẽ nhận thằng return bên trene làm tham số của chính nó 
    // Không như các syntax khác của js, mỗi lần Return n sẽ trả về 1 promise khác, và cái promise đấy sẽ nhận giá trị return đấy làm tham số cho resolve

    // fetch và read local file, xmhtmlrequest 
        // chỉ có fetch và read local file dùng  promise

            // fetch là hàm dể call api từ ngoài về 
    
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => console.log(response));
            // .then(json => console.log(json))

    // const fetch = (url) => {
    //     new Promise(
    //         (resolve, reject ) =>{

    //         }

    //     )
    // }
    // trả về 1 tham số, tham số đó có 1 cái hàm gọi là response.json => xử lý dữ liệu đc gọi là buffer.
    // buffêr lại trả về 1 dạng promise => .then để dùng