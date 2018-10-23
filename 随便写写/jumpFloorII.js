// f(1) = 1
// f(2) = f(2-1) + f(2-2)         //f(2-2) 表示2阶一次跳2阶的次数。
// f(3) = f(3-1) + f(3-2) + f(3-3) 
// ...
// f(n) = f(n-1) + f(n-2) + f(n-3) + ... + f(n-(n-1)) + f(n-n) 
// 这种题目一定要先列公式、找规律（值的规律or公式的复用性）
function jumpFloorII(number){
    if(number==0)
        return 0;
    if(number==1)
        return 1;
    var sum = 2*jumpFloorII(number-1);
    return sum;
}
// 每个台阶都有跳与不跳两种情况（除了最后一个台阶），最后一个台阶必须跳。所以共用2^(n-1)中情况
// 递归超时可以考虑用查表
function jumpFloorII1(number){
    if(number==1)
        return 1;
    return Math.pow(2,number-1);
}
console.log(jumpFloorII1(2));