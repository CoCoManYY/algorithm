// 无符号右移运算符由三个大于号（>>>）表示，它将无符号 32 位数的所有数位整体右移。
// 对于正数，无符号右移运算的结果与有符号右移运算一样。
// 对于负数即有符号整数的二进制补码表示
function NumberOf1(n){
    if(n<0){
        n=n>>>0;
    }
    n=n.toString(2)
    var sum=0;
    for(i=0;i<n.length;i++){
        if(n[i]==1){
            sum++;
        }
    }
    // console.log(sum);
    return sum;
}
NumberOf1(-3);
console.log((-3>>>0).toString(2));