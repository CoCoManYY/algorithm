// 1、递归表达式
// 2、确定递归函数的参数（理解其中参数含义）
// 3、准确表达程序出口
// 4、根据表达式准确写出函数返回值
function halfSet(n){
    if(n==1){
        return 1;
    }
    let count=1;
    for(let i=1;i<=n/2;i++){
        console.log('循环'+i);
        count+=await halfSet(i);
    }
    return count;
}
halfSet(8);
// console.log(halfSet(8));