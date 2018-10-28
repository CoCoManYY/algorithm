// 可以发现等式可以是几个重复树数互相排列组合来的
// 于是就可以递归一棵因子树
async function factorization(n){

    var count=1;//本身
    if(n==1||n==2||n==3)
        return 1;
    for(let i=2;i<=n/2;i++){//一定要加let or var啊，注意全局变量的坑！！！！！
        if(n%i==0)
            count+=await factorization(n/i);
    }
    return count;
}

async function main(){
    var input = 12;
    console.log('input:'+input);
    var output = await factorization(input);
    console.log('output:'+output);
}

main();