let $arr = [1,1,2,3,4,5]
$arr.forEach((num,i) => {
        if($arr.indexOf(num != i)){
            $arr = $arr.filter(numTemp => num != numTemp)
        }
})
console.log($arr);