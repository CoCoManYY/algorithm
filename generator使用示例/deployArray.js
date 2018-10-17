function * deployArrayInterface(arr){
    var nextIndex = 0;
    while(nextIndex<arr.length){
        yield arr[nextIndex++];
    }
}

var arr = deployArrayInterface(['name','age']);
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());