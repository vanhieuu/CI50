// console.log('hello what the fuck');
let $app = document.getElementById('app');
// Là 1 class 
http://127.0.0.1:5501/Session11/!#about
var root = null;
var useHash = true; // Defaults to: false

var hash = '#'; // Defaults to: '#'


// let router = new Navigo(root, useHash, hash);
let router = new Navigo(root, useHash,hash)
//Chức năng hàm on : Khi duyệt đến 1 đường link lq dến đường link about thì n sẽ chạy fuction
router.on("/",function(){
    $app.innerHTML = `<a href ="/#/about"> Home </a> <h2>This is home page</h2>`
}).resolve();

router
  .on('/about', function () {
      $app.innerHTML = `<a href ="/#/">Home</a>
                            <h2>This is about page</h2>`
    // display all the products
  }).resolve()

  router
    .on("/post/:id/:name",function(params){
        console.log(params);
  }).resolve();
  