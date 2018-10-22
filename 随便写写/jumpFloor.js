//列出树状结构
//             | 1, (n=1)
// f(n) =      | 2, (n=2)
//             | f(n-1)+f(n-2) ,(n>2,n为整数)
function jumpFloor(number){//递归emmm超时了
    //先做一波初始判断
    if(number<=0){
        return 0;
    }
    else if(number==1){
        return 1
    }
    else if(number == 2){
        return 2;
    }
    var sum = jumpFloor(number-1)+jumpFloor(number-2);
    return sum;
}

function jumpFloor1(number){//还是老老实实迭代吧
    //先做一波初始判断
    if(number<=0){
        return 0;
    }
    else if(number==1){
        return 1
    }
    else if(number == 2){
        return 2;
    }
    var pp=1;
    var p=2;
    var cur;
    while((number--)-2>0){
        cur = pp+p;
        pp=p;
        p=cur;
    }
    return cur;
}

console.log(jumpFloor1(3));