function reOrderArray(array){
    var odd=[];
    var even=[];
    array.forEach(element => {
        if(element%2){
            odd.push(element);
        }else{
            even.push(element);
        }
    });
    return odd.concat(even);
}