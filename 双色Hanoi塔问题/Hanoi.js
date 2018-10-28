// 其实双色与单色移动方法相同，因为在最小的移动方法中同色的两个盘子是不可能在一起的，
// 如果只求移动的最少步数，可以用公式2^n-1,注意数值过大时需要用高精度
async function Hanoi(A,B,C,n){//从A（经过C）到B
    //出口
    if(n==1){
        console.log(n+' '+A+' '+B);
    }
    else{
        await Hanoi(A,C,B,n-1);//先把n-1个圆盘从A（经过B）到C
        console.log(n+' '+A+' '+B);//把第n个圆盘从A放到B
        await Hanoi(C,B,A,n-1);//再把n-1个圆盘从C（经过A）到B
    }
}

function main(n){
    var A='A';
    var B='B';
    var C='C';
    Hanoi(A,B,C,n);
}

main(3);