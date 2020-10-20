let $level3 = document.getElementById('level-3');
let $level2 = document.getElementById('level-2');
let $level1 = document.getElementById('level-1');

            // Bản chất là cái Listener sẽ nghe ngóng khi mà sự kiện đc diễn ra


$level3.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Level-3 clicked');
    //Định nghĩa 1 event
    let myEvent = new CustomEvent('xì hơi', {
        bubbles:true,
        detail:{
            message: "Các chú bên trên thấy thúi không"
        }
    });
    // PHÁT event từ lv3
    console.log(this);
    this.dispatchEvent(myEvent);
});


$level2.addEventListener('xì hơi',function (event) {
    event.stopPropagation();
    console.log(event);
        //target Điểm xuất phát của event
        //Current Target là điểm đến hiện tại của event
    console.log('Level-2 clicked');
    alert('Thối vl');
})      
$level1.addEventListener('xì hơi',function (event) {
    console.log('Level-1 clicked');
    alert('Dm thằng lv 3')
})      