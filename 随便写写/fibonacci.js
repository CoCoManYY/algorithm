function febonacci(n){
    if(n==0){
        return 0;
    }
    var pp=1
    var p=1
    var cur=1;
    while((n--)-2>0){
        cur = pp+p;
        pp=p;
        p=cur;
    }
    return cur;
}
console.log(febonacci(1));